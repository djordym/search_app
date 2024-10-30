/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex('articles')
    .del()
    .then(() => {
      return knex('articles').insert([
        {
          title: 'The Art of Carpentry',
          short_description: 'An introduction to carpentry and the skills needed to become a master carpenter.',
          html_content: `
            <p>Carpentry is one of the oldest crafts and forms an essential part of the construction industry. It is an art that requires precision, skill, and creativity. Carpenters work with wood to create everything from furniture and cabinets to complete wooden structures in homes and buildings.</p>
            <h2>History of Carpentry</h2>
            <p>The use of wood in constructions dates back thousands of years. Ancient civilizations like the Egyptians and Romans extensively used wood in their architecture. Over the centuries, carpenters have refined their techniques and developed new methods to work and join wood.</p>
            <h2>Important Skills for Carpenters</h2>
            <p>A successful carpenter must possess a range of skills:</p>
            <ul>
              <li><strong>Knowledge of Wood Types:</strong> Understanding which types of wood are suitable for specific applications and how they react to environmental factors.</li>
              <li><strong>Tool Usage:</strong> Proficiency in using both hand tools and power tools like saws, chisels, and sanders.</li>
              <li><strong>Reading Blueprints:</strong> The ability to interpret building plans and technical drawings and translate them into physical structures.</li>
              <li><strong>Measurement Accuracy:</strong> Precision in measuring and cutting is crucial to ensure all parts fit correctly.</li>
              <li><strong>Problem-Solving Skills:</strong> The ability to tackle unexpected challenges during a project and devise creative solutions.</li>
            </ul>
            <h2>Modern Developments in Carpentry</h2>
            <p>With advancements in technology, carpentry has also benefited from new tools and techniques. CNC machines and laser cutters allow for the realization of complex designs with high precision. Additionally, new materials like laminated wood and composite wood products offer new possibilities in construction and design.</p>
            <h2>The Path to Mastery</h2>
            <p>Becoming a master carpenter requires years of training and practical experience. This often includes a combination of formal education and apprenticeships under experienced craftsmen. Continuing education is also important, as new techniques and materials are continually introduced in the industry.</p>
            <h2>The Role of Carpentry in Sustainable Building</h2>
            <p>Carpentry plays a crucial role in sustainable building practices. Wood is a renewable material, and when sourced responsibly, it can significantly reduce the ecological footprint of a construction project. Moreover, carpenters can contribute to energy efficiency by creating well-insulated structures and using environmentally friendly materials.</p>
            <h2>Conclusion</h2>
            <p>The art of carpentry is a combination of traditional skills and modern innovations. It is a profession that can be both physically and creatively rewarding, with endless opportunities for specialization and growth. Whether you're interested in furniture making, building construction, or decorative wood carving, carpentry offers a world of opportunities for those willing to learn and perfect their skills.</p>
          `,
        },
        {
          title: 'How Masonry Forms the Foundation of Every Building',
          short_description: 'A guide to understanding masonry and why it is so important in construction.',
          html_content: `
            <p>Masonry is one of the most fundamental aspects of construction and plays a crucial role in the structure and aesthetics of buildings. It involves the assembling of materials like brick, stone, and concrete blocks using mortar to create strong and durable structures.</p>
            <h2>The History of Masonry</h2>
            <p>Masonry has a rich history that dates back to the earliest civilizations. Ancient Egyptians, Greeks, and Romans used masonry to build some of the world's most iconic structures, such as the pyramids and the Colosseum. These historical buildings testify to the durability and craftsmanship of masonry.</p>
            <h2>Why is Masonry Important?</h2>
            <p>Masonry offers several advantages that make it an indispensable part of construction:</p>
            <ul>
              <li><strong>Structural Strength:</strong> Masonry can withstand significant loads and can resist both vertical and lateral forces, making it ideal for load-bearing walls and foundations.</li>
              <li><strong>Fire Resistance:</strong> Materials like brick and stone are non-combustible, contributing to the safety of a building.</li>
              <li><strong>Durability:</strong> Masonry constructions have a long lifespan and require minimal maintenance, saving costs in the long run.</li>
              <li><strong>Thermal Mass:</strong> Masonry can store heat and release it slowly, contributing to a stable indoor climate and energy savings.</li>
            </ul>
            <h2>Types of Masonry</h2>
            <p>There are various types of masonry, each with its own techniques and applications:</p>
            <ul>
              <li><strong>Brick Masonry:</strong> The most common type, used for both residential and commercial buildings.</li>
              <li><strong>Stone Masonry:</strong> Used for an aesthetic appearance, often in luxury homes and historical buildings.</li>
              <li><strong>Concrete Block Masonry:</strong> Often used in foundations and industrial buildings due to its strength and cost-efficiency.</li>
            </ul>
            <h2>Masonry Techniques</h2>
            <p>There are diverse bonding patterns and techniques that affect the strength and appearance of a wall:</p>
            <ul>
              <li><strong>Running Bond:</strong> Each brick is laid as a stretcher offset by half a brick, providing a strong and stable pattern.</li>
              <li><strong>Stack Bond:</strong> Bricks are stacked directly over each other, giving a unique visual effect but less structural strength.</li>
              <li><strong>Herringbone Pattern:</strong> Bricks are laid in a V-shaped pattern, often used in decorative applications.</li>
            </ul>
            <h2>The Role of the Mason</h2>
            <p>A skilled mason is essential for the quality of masonry work. They must be able to measure and cut accurately, have knowledge of different materials and techniques, and be able to interpret building drawings correctly.</p>
            <h2>Masonry in Modern Construction</h2>
            <p>In contemporary construction, masonry is often combined with other building methods and materials. Innovations such as prefabricated masonry elements and new mortar types improve the efficiency and quality of masonry projects.</p>
            <h2>Sustainability and Masonry</h2>
            <p>Masonry can contribute to sustainable building practices. Bricks and stones are often locally available and have a low environmental footprint. Additionally, they can be recycled or reused in new constructions.</p>
            <h2>Conclusion</h2>
            <p>Understanding masonry is essential for anyone involved in the construction sector. It not only forms the physical foundation of many buildings but also is a crucial element in the sustainability and aesthetics of our built environment. By combining traditional techniques and modern innovations, masonry remains a cornerstone of the construction industry.</p>
          `,
        },
        {
          title: 'Craftsmanship in Construction: Balancing Tradition and Innovation',
          short_description: 'Discover how traditional building techniques blend with modern innovations to create sustainable buildings.',
          html_content: `
            <p>The construction sector is known for its rich history and traditions, but also for its ability to evolve and adapt to new technologies. Craftsmanship in construction means combining time-tested methods with innovative solutions to create high-quality and sustainable buildings.</p>
            <h2>The Importance of Traditional Craftsmanship</h2>
            <p>Traditional building techniques have been refined over centuries and form the basis of modern construction practices. They offer:</p>
            <ul>
              <li><strong>Durability:</strong> Many traditional techniques have stood the test of time and have proven to produce long-lasting and sturdy constructions.</li>
              <li><strong>Quality:</strong> Artisanal skills ensure attention to detail and finishing that is hard to match with purely mechanical processes.</li>
              <li><strong>Cultural Preservation:</strong> They contribute to the preservation of cultural heritage and local building styles.</li>
            </ul>
            <h2>The Role of Innovation</h2>
            <p>Modern technologies and materials bring new possibilities:</p>
            <ul>
              <li><strong>Efficiency:</strong> Technological tools like BIM (Building Information Modeling) improve the planning and execution of construction projects.</li>
              <li><strong>Sustainability:</strong> Innovative materials and techniques reduce the environmental impact of construction activities.</li>
              <li><strong>Safety:</strong> New equipment and procedures enhance safety on the construction site.</li>
            </ul>
            <h2>Combining Old and New</h2>
            <p>Successfully integrating tradition and innovation requires an open mindset and willingness to learn. Some ways this happens are:</p>
            <ul>
              <li><strong>Education and Training:</strong> Construction professionals continue to develop their skills by learning both traditional and modern techniques.</li>
              <li><strong>Collaboration:</strong> Teams with diverse expertise can develop innovative solutions rooted in craftsmanship.</li>
              <li><strong>Adaptive Reuse:</strong> Renovating and repurposing old buildings with modern technologies to meet contemporary standards.</li>
            </ul>
            <h2>Examples of Synergy</h2>
            <p>There are countless projects that show how tradition and innovation go hand in hand:</p>
            <ul>
              <li><strong>Restoration Projects:</strong> Historic buildings are restored while preserving original techniques and equipped with modern amenities.</li>
              <li><strong>Sustainable Architecture:</strong> Traditional building materials like wood and stone are combined with high-tech insulation and energy-efficient systems.</li>
              <li><strong>3D Printing in Construction:</strong> Innovative methods like 3D printing are used to create complex structures inspired by traditional designs.</li>
            </ul>
            <h2>The Future of Craftsmanship</h2>
            <p>The construction sector will continue to evolve, but the importance of craftsmanship will always remain. By continuing to invest in education and valuing both traditional and new skills, we can create buildings that are not only functional and sustainable but also aesthetically and culturally meaningful.</p>
            <h2>Conclusion</h2>
            <p>Craftsmanship in construction is more than just mastering techniques; it's a philosophy that brings together quality, innovation, and tradition. By combining the best of both worlds, we can create a built environment that meets today's needs and tomorrow's challenges.</p>
          `,
        },
        {
          title: 'Sustainable Building: The Path to a Green Future',
          short_description: 'An in-depth look into sustainable building and why it is the future of the construction industry.',
          html_content: `
            <p>Sustainable building is an approach to construction that considers the environmental, economic, and social impact. It aims to minimize negative effects and maximize positive contributions to the planet and its inhabitants.</p>
            <h2>What is Sustainable Building?</h2>
            <p>Sustainable building involves designing, constructing, and operating buildings in a way that uses resources efficiently and enhances the health and well-being of occupants. It includes aspects like energy efficiency, water conservation, material selection, and indoor air quality.</p>
            <h2>Core Principles of Sustainable Building</h2>
            <ul>
              <li><strong>Energy Efficiency:</strong> Reducing energy consumption through insulation, efficient heating and cooling systems, and the use of renewable energy sources.</li>
              <li><strong>Water Management:</strong> Implementation of water-saving devices and systems for rainwater harvesting and greywater recycling.</li>
              <li><strong>Sustainable Materials:</strong> Use of materials with low environmental impact, such as recycled or locally produced materials.</li>
              <li><strong>Healthy Indoor Environments:</strong> Improving indoor air quality through ventilation and avoiding harmful chemicals in building materials.</li>
              <li><strong>Waste Reduction:</strong> Minimizing waste during construction and promoting recycling and reuse.</li>
            </ul>
            <h2>Benefits of Sustainable Building</h2>
            <p>There are numerous benefits associated with sustainable building:</p>
            <ul>
              <li><strong>Environmental Gains:</strong> Reduction of the ecological footprint and protection of natural resources.</li>
              <li><strong>Cost Savings:</strong> Lower operational costs due to more efficient energy and water use.</li>
              <li><strong>Health and Well-being:</strong> Improved living conditions for occupants through better air quality and natural light.</li>
              <li><strong>Value Increase:</strong> Sustainable buildings often have higher market value and are more attractive to tenants and buyers.</li>
            </ul>
            <h2>Challenges and Solutions</h2>
            <p>While sustainable building offers many benefits, there are also challenges:</p>
            <ul>
              <li><strong>Higher Initial Costs:</strong> Some sustainable technologies and materials can be more expensive. <strong>Solution:</strong> Focus on total life cycle costs and the payback period of investments.</li>
              <li><strong>Lack of Awareness:</strong> Not all stakeholders are aware of the benefits. <strong>Solution:</strong> Education and outreach to communicate the advantages.</li>
              <li><strong>Technical Barriers:</strong> New technologies may be unfamiliar to construction professionals. <strong>Solution:</strong> Training and certification to develop skills.</li>
            </ul>
            <h2>The Role of Regulation and Certification</h2>
            <p>Governments and organizations play a significant role in promoting sustainable building through regulations and certification systems like LEED, BREEAM, and the Passive House standard. These systems set standards for sustainability and provide a framework for evaluating and improving construction projects.</p>
            <h2>Future Perspectives</h2>
            <p>With the increasing focus on climate change and environmental conservation, sustainable building will become increasingly important. Innovations such as green roofs, smart buildings, and circular construction practices will become the norm. It is essential that the construction sector adapts and invests in sustainable solutions to meet future demand.</p>
            <h2>Conclusion</h2>
            <p>Sustainable building is not just a trend but a necessary shift in how we approach our built environment. By taking action now and investing in sustainable practices, we can contribute to a healthier planet and better living conditions for future generations.</p>
          `,
        },
        {
          title: 'The Versatility of Roofing Works',
          short_description: 'Everything you need to know about roofing and the expertise required to create durable roofs.',
          html_content: `
            <p>Roofing works are an essential part of any building, responsible for protection against weather elements and contributing to the energy efficiency and aesthetics of the building. The complexity and versatility of roofing require specialized knowledge and skills.</p>
            <h2>Functions of a Roof</h2>
            <p>A roof serves multiple purposes:</p>
            <ul>
              <li><strong>Protection:</strong> Shields against rain, snow, wind, and sunlight.</li>
              <li><strong>Insulation:</strong> Helps maintain a comfortable indoor climate by reducing heat loss in winter and heat gain in summer.</li>
              <li><strong>Aesthetics:</strong> Contributes to the appearance and architectural style of the building.</li>
            </ul>
            <h2>Types of Roof Structures</h2>
            <p>There are various roof types, each with unique characteristics and applications:</p>
            <ul>
              <li><strong>Pitched Roofs:</strong> Common in residential buildings, effective for water runoff.</li>
              <li><strong>Flat Roofs:</strong> Often used in commercial buildings, providing space for HVAC systems or roof gardens.</li>
              <li><strong>Mansard Roofs:</strong> Characteristic of French architecture, with double slopes for additional attic space.</li>
              <li><strong>Shed Roofs:</strong> Simple design with a single sloping plane, often used in modern architecture.</li>
            </ul>
            <h2>Materials for Roofing</h2>
            <p>The choice of roofing material depends on factors like climate, budget, and aesthetic preference:</p>
            <ul>
              <li><strong>Asphalt Shingles:</strong> Affordable and easy to install, popular in North America.</li>
              <li><strong>Clay Tiles:</strong> Durable and aesthetically pleasing, often used in Mediterranean styles.</li>
              <li><strong>Slate:</strong> Highly durable and luxurious, but heavy and expensive.</li>
              <li><strong>Metal:</strong> Lightweight and durable, suitable for various roof styles.</li>
              <li><strong>Bitumen and EPDM:</strong> Commonly used for flat roofs due to their waterproof properties.</li>
            </ul>
            <h2>Expertise in Roofing Works</h2>
            <p>Professional roofers must possess extensive knowledge and skills:</p>
            <ul>
              <li><strong>Construction Principles:</strong> Understanding of roof structures and load-bearing capacity.</li>
              <li><strong>Waterproofing Techniques:</strong> Methods to prevent leaks and ensure durability.</li>
              <li><strong>Safety Protocols:</strong> Compliance with safety regulations when working at heights.</li>
              <li><strong>Insulation and Ventilation:</strong> Knowledge of techniques to improve energy efficiency.</li>
            </ul>
            <h2>Innovations in Roofing Works</h2>
            <p>The roofing industry evolves with new technologies and materials:</p>
            <ul>
              <li><strong>Solar Panels:</strong> Integration of photovoltaic systems for sustainable energy generation.</li>
              <li><strong>Green Roofs:</strong> Vegetation on roofs for insulation and biodiversity.</li>
              <li><strong>Smart Roofing Materials:</strong> Materials that react to weather conditions to optimize performance.</li>
            </ul>
            <h2>Maintenance and Lifespan</h2>
            <p>Regular maintenance is essential for the lifespan of a roof:</p>
            <ul>
              <li><strong>Inspections:</strong> Periodic checks for damage or wear.</li>
              <li><strong>Cleaning:</strong> Removal of debris, leaves, and moss to prevent blockages and damage.</li>
              <li><strong>Repairs:</strong> Timely addressing of minor issues to prevent major damage.</li>
            </ul>
            <h2>Conclusion</h2>
            <p>The versatility of roofing works requires a combination of traditional expertise and modern innovations. A well-designed and maintained roof not only contributes to the protection and efficiency of a building but also to its aesthetic value. By investing in quality and craftsmanship, owners can extend the lifespan of their roof and enjoy the many benefits it offers.</p>
          `,
        },
        // Add more articles as needed
      ]);
    });
};
