<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md">
      <div class="flex">
        <input
          type="text"
          v-model="searchTerm"
          @focus="showPanel = true"
          @input="onInput"
          @keydown="onKeydown"
          class="w-full px-4 py-2 border border-r-0 rounded-l-lg focus:outline-none"
          placeholder="Search..."
        />
        <button
          @click="performSearch"
          class="px-4 py-2 bg-blue-500 text-white rounded-r-lg focus:outline-none"
        >
          <!-- Search Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div v-if="showPanel" class="relative">
        <div class="absolute w-full mt-2 bg-white border rounded shadow">
          <div v-if="suggestionItems.length">
            <ul>
              <li
                v-for="(suggestion, index) in suggestionItems"
                :key="index"
                @click="suggestion.type === 'heading' || suggestion.type === 'message' ? null : handleSuggestionClick(suggestion)"
                :class="[
                  'px-4 py-2',
                  suggestion.type === 'heading' ? 'text-lg font-semibold' : '',
                  suggestion.type === 'message' ? '' : 'cursor-pointer',
                  index === selectedIndex && suggestion.type !== 'heading' && suggestion.type !== 'message' ? 'bg-blue-100' : 'hover:bg-gray-200',
                ]"
              >
                <template v-if="suggestion.type === 'heading' || suggestion.type === 'message'">
                  {{ suggestion.text }}
                </template>
                <template v-else-if="suggestion.type === 'recent' || suggestion.type === 'popular' || suggestion.type === 'search'">
                  {{ suggestion.item.search_term }}
                </template>
                <template v-else-if="suggestion.type === 'article'">
                  <h4 class="font-semibold">{{ suggestion.item.title }}</h4>
                  <p>{{ suggestion.item.short_description }}</p>
                </template>
              </li>
            </ul>
          </div>
          <p v-else class="px-4 py-2">No suggestions found.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';

const searchTerm = ref('');
const showPanel = ref(false);
const recentSearches = ref([]);
const popularSearches = ref([]);
const filteredSearches = ref([]);
const articles = ref([]);
const selectedIndex = ref(-1);

const userId = 1; // Simulate user ID

const backendUrl = 'http://localhost:3000'; // Backend URL

const fetchRecentSearches = async () => {
  const response = await fetch(
    `${backendUrl}/api/searches/recent?user_id=${userId}`
  );
  recentSearches.value = await response.json();
};

const fetchPopularSearches = async () => {
  const response = await fetch(`${backendUrl}/api/searches/popular`);
  popularSearches.value = await response.json();
};

const fetchArticles = async () => {
  if (searchTerm.value) {
    const response = await fetch(
      `${backendUrl}/api/articles?query=${encodeURIComponent(searchTerm.value)}`
    );
    articles.value = await response.json();
  }
};

const fetchFilteredSearches = async () => {
  if (searchTerm.value) {
    const response = await fetch(
      `${backendUrl}/api/searches?query=${encodeURIComponent(searchTerm.value)}`
    );
    filteredSearches.value = await response.json();
  }
};

const onInput = async () => {
  if (searchTerm.value) {
    // Fetch filtered searches
    await fetchFilteredSearches();

    // Fetch articles
    await fetchArticles();
  } else {
    filteredSearches.value = [];
    articles.value = [];
  }
};

const suggestionItems = computed(() => {
  let items = [];
  if (!searchTerm.value) {
    if (recentSearches.value.length > 0) {
      items.push({ type: 'heading', text: 'Recent Searches' });
      items.push(
        ...recentSearches.value.map((item) => ({ type: 'recent', item }))
      );
    }
    if (popularSearches.value.length > 0) {
      items.push({ type: 'heading', text: 'Popular Searches' });
      items.push(
        ...popularSearches.value.map((item) => ({ type: 'popular', item }))
      );
    }
  } else {
    if (filteredSearches.value.length > 0) {
      items.push({ type: 'heading', text: 'Search Suggestions' });
      items.push(
        ...filteredSearches.value.map((item) => ({ type: 'search', item }))
      );
    } else {
      items.push({ type: 'message', text: 'No search suggestions found.' });
    }
    if (articles.value.length > 0) {
      items.push({ type: 'heading', text: 'Articles' });
      items.push(
        ...articles.value.map((item) => ({ type: 'article', item }))
      );
    } else {
      items.push({ type: 'message', text: 'No articles found.' });
    }
  }
  return items;
});

const getTotalSuggestionItems = () => suggestionItems.value.length;

const moveSelection = (delta) => {
  const totalItems = getTotalSuggestionItems();
  if (totalItems > 0) {
    let newIndex = selectedIndex.value + delta;
    // Loop around
    if (newIndex < 0) newIndex = totalItems - 1;
    if (newIndex >= totalItems) newIndex = 0;
    // Skip non-selectable items
    while (
      suggestionItems.value[newIndex].type === 'heading' ||
      suggestionItems.value[newIndex].type === 'message'
    ) {
      newIndex += delta;
      // Loop around
      if (newIndex < 0) newIndex = totalItems - 1;
      if (newIndex >= totalItems) newIndex = 0;
    }
    selectedIndex.value = newIndex;
  }
};

const onKeydown = (event) => {
  if (showPanel.value) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      // Move selection down
      moveSelection(1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      // Move selection up
      moveSelection(-1);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (selectedIndex.value >= 0) {
        // Select the current suggestion
        selectSuggestionByIndex(selectedIndex.value);
        fetchFilteredSearches();
        fetchArticles();
      } else {
        performSearch();
      }
    }
  }
};

const selectSuggestionByIndex = (index) => {
  const suggestion = suggestionItems.value[index];
  if (suggestion.type === 'recent' || suggestion.type === 'popular' || suggestion.type === 'search') {
    selectSearch(suggestion.item.search_term);
  } else if (suggestion.type === 'article') {
    // Handle article selection
    console.log('Selected article:', suggestion.item);
    // You can implement navigation to the article here
  }
};

const handleSuggestionClick = (suggestion) => {
  if (suggestion.type === 'recent' || suggestion.type === 'popular' || suggestion.type === 'search') {
    selectSearch(suggestion.item.search_term);
    fetchFilteredSearches();
    fetchArticles();
  } else if (suggestion.type === 'article') {
    // Handle article click
    console.log('Clicked article:', suggestion.item);
    // Implement navigation to the article if needed
  }
};

const selectSearch = async (term) => {
  searchTerm.value = term;
  //showPanel.value = false;

  // Save the search term
  await fetch(`${backendUrl}/api/searches`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: userId,
      search_term: term,
    }),
  });

  // Optionally handle search action here
};

const performSearch = async () => {
  // Save the search term
  await fetch(`${backendUrl}/api/searches`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: userId,
      search_term: searchTerm.value,
    }),
  });

  // Optionally handle search action here
  // For now, we'll just clear the search term
  // searchTerm.value = '';

  // Update recent searches
  await fetchRecentSearches();
  //update popular searches
  await fetchPopularSearches();
};

watch(
  suggestionItems,
  () => {
    selectedIndex.value = -1;
  },
  { immediate: true }
);

onMounted(() => {
  fetchRecentSearches();
  fetchPopularSearches();
});
</script>
