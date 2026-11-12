export type AgricultureQuestion = {
  id: number
  question: string
  answer: string
  section: string
}

const fundamentals = [
  [
    "What is agriculture?",
    "Agriculture is the science, art and practice of cultivating soil, growing crops, raising livestock and producing food, fibre and other useful products.",
  ],
  [
    "Why is agriculture important for human survival?",
    "Agriculture provides food, raw materials, employment and economic resources. It supports human nutrition and is essential for food security.",
  ],
  [
    "What are the main branches of agriculture?",
    "The main branches include agronomy, horticulture, soil science, agricultural engineering, agricultural economics, plant pathology, entomology and animal husbandry.",
  ],
  [
    "What is the difference between agriculture and farming?",
    "Agriculture is the broader field that includes crop production, livestock, research and agricultural technology. Farming is the practical activity of growing crops and raising animals.",
  ],
  [
    "What are the primary objectives of agriculture?",
    "Its objectives are to produce sufficient food, improve crop productivity, support farmers' livelihoods, conserve natural resources and maintain sustainable food systems.",
  ],
  [
    "What are the major types of farming?",
    "Major types include subsistence farming, commercial farming, intensive farming, extensive farming, mixed farming, organic farming and plantation farming.",
  ],
  [
    "What is subsistence farming?",
    "Subsistence farming is a type of farming in which farmers primarily grow crops and raise livestock to meet their own household requirements.",
  ],
  [
    "What is commercial farming?",
    "Commercial farming involves producing crops or livestock mainly for sale and profit.",
  ],
  [
    "What is intensive farming?",
    "Intensive farming uses relatively high inputs of labour, capital, water or fertilizers on a limited area of land to achieve higher production.",
  ],
  [
    "What is extensive farming?",
    "Extensive farming uses relatively large areas of land with lower inputs per unit of land.",
  ],
  [
    "What is sustainable agriculture?",
    "Sustainable agriculture produces food while conserving soil, water and biodiversity and maintaining the economic and social well-being of farming communities.",
  ],
  [
    "What is modern agriculture?",
    "Modern agriculture uses scientific research, machinery, improved seeds, irrigation, fertilizers, sensors, automation and digital technology to improve agricultural production.",
  ],
  [
    "How has agriculture evolved over the centuries?",
    "Agriculture evolved from hunting and gathering to traditional cultivation, animal-powered farming, mechanisation, improved crop varieties, biotechnology and precision agriculture.",
  ],
  [
    "What was the Green Revolution?",
    "The Green Revolution was a period of agricultural transformation involving high-yielding crop varieties, irrigation, fertilizers and improved farming practices. It significantly increased food-grain production in India.",
  ],
  [
    "What were the major disadvantages of the Green Revolution?",
    "Its challenges included groundwater depletion, excessive chemical inputs, soil degradation, regional inequalities and reduced crop diversity in some farming systems.",
  ],
  [
    "What is the White Revolution?",
    "The White Revolution was India's dairy development movement that greatly increased milk production through cooperative systems and improved dairy management.",
  ],
  [
    "What is the Blue Revolution?",
    "The Blue Revolution refers to the development and expansion of fisheries and aquaculture.",
  ],
  [
    "What is the Yellow Revolution?",
    "The Yellow Revolution refers to increasing oilseed production, particularly crops such as mustard, groundnut and sunflower.",
  ],
  [
    "What is the difference between traditional and modern farming?",
    "Traditional farming generally relies more on local knowledge, traditional seeds and manual practices, while modern farming incorporates scientific methods, machinery, improved varieties and digital technologies.",
  ],
  [
    "Why is agriculture considered the backbone of the Indian economy?",
    "Agriculture supports millions of livelihoods, supplies food and industrial raw materials, contributes to national income and supports rural economic development.",
  ],
  [
    "What percentage of India's workforce depends on agriculture?",
    "Approximately 46% of India's workforce was employed in agriculture according to PLFS 2023–24 estimates. The percentage varies depending on the year and measurement method.",
  ],
  [
    "How does agriculture contribute to India's GDP?",
    "Agriculture and allied activities contribute roughly 18% of India's gross value added, although the exact proportion changes annually.",
  ],
  [
    "What are the major challenges faced by Indian farmers?",
    "Major challenges include irregular rainfall, small landholdings, rising input costs, soil degradation, water scarcity, pests, market fluctuations and inadequate storage infrastructure.",
  ],
  [
    "What is agricultural productivity?",
    "Agricultural productivity measures how efficiently agricultural inputs such as land, labour, water and capital are converted into agricultural output.",
  ],
  [
    "What factors determine crop productivity?",
    "Crop productivity depends on soil fertility, water availability, climate, seed quality, nutrients, pest management, farming practices and technology.",
  ],
  [
    "What is food security?",
    "Food security means that all people have reliable physical and economic access to sufficient, safe and nutritious food.",
  ],
  [
    "How does agriculture contribute to food security?",
    "Agriculture produces the food required by populations and supports food availability, rural employment and stable food supplies.",
  ],
  [
    "What is nutritional security?",
    "Nutritional security means having consistent access to food that provides the nutrients necessary for healthy growth and development.",
  ],
  [
    "What is the relationship between population growth and agriculture?",
    "Population growth increases food demand, requiring improvements in agricultural productivity, distribution, storage and resource management.",
  ],
  [
    "What could happen if agricultural productivity decreases significantly?",
    "It could lead to food shortages, increased food prices, lower farmer incomes, greater dependence on imports and increased food insecurity.",
  ],
]

const indianAgriculture = [
  [
    "Which crops are most widely cultivated in India?",
    "Rice, wheat, maize, pulses, sugarcane, cotton, oilseeds and millets are among India's major crops.",
  ],
  [
    "What are Kharif crops?",
    "Kharif crops are generally sown during the monsoon season, around June–July, and harvested around September–October or later. Examples include rice, maize and cotton.",
  ],
  [
    "What are Rabi crops?",
    "Rabi crops are generally sown during the winter season, around October–December, and harvested in spring. Examples include wheat, mustard and chickpea.",
  ],
  [
    "What are Zaid crops?",
    "Zaid crops are grown during the short summer season between Rabi and Kharif. Examples include watermelon, cucumber and muskmelon.",
  ],
  [
    "What is the difference between Kharif and Rabi crops?",
    "Kharif crops are generally grown during the rainy season, whereas Rabi crops are grown during the cooler winter season.",
  ],
  [
    "Why is rice primarily grown during the monsoon season?",
    "Rice generally requires substantial water during its growing period, and monsoon rainfall can provide much of that requirement. However, rice can also be grown in other seasons where irrigation is available.",
  ],
  [
    "Which Indian states are major rice producers?",
    "West Bengal, Uttar Pradesh, Punjab, Telangana, Odisha, Andhra Pradesh and Chhattisgarh are major rice-producing states.",
  ],
  [
    "Which Indian states are major wheat producers?",
    "Uttar Pradesh, Madhya Pradesh, Punjab, Haryana and Rajasthan are major wheat-producing states.",
  ],
  [
    "Why is Punjab known for agricultural production?",
    "Punjab has fertile alluvial soils, irrigation infrastructure, mechanisation and a long history of high-yielding wheat and rice cultivation.",
  ],
  [
    "What is India's largest agricultural export?",
    "There is no single permanent answer because export rankings change by year and by whether products are measured individually or as categories. Rice has been among India's leading agricultural export commodities.",
  ],
  [
    "What is the role of ICAR?",
    "The Indian Council of Agricultural Research coordinates and supports agricultural research, education and extension activities in India.",
  ],
  [
    "What is the role of agricultural universities?",
    "They provide agricultural education, conduct research, develop improved technologies and train farmers through extension programmes.",
  ],
  [
    "What is the Minimum Support Price (MSP)?",
    "MSP is a government-announced price intended to provide farmers with price assurance for specified agricultural crops.",
  ],
  [
    "Who determines MSP in India?",
    "The Government of India announces MSP, considering recommendations from the Commission for Agricultural Costs and Prices (CACP).",
  ],
  [
    "What is the Pradhan Mantri Kisan Samman Nidhi scheme?",
    "PM-KISAN is a central government scheme that provides eligible farmer families with financial assistance of ₹6,000 annually through direct benefit transfers, subject to scheme rules.",
  ],
  [
    "What is the Pradhan Mantri Fasal Bima Yojana?",
    "It is a government-supported crop insurance scheme designed to provide financial protection to eligible farmers against specified crop losses caused by covered risks.",
  ],
  [
    "What is the Soil Health Card Scheme?",
    "It is a government initiative that provides farmers with information about soil nutrient status and recommendations for appropriate nutrient management.",
  ],
  [
    "What is the Kisan Credit Card?",
    "The Kisan Credit Card provides eligible farmers with access to flexible institutional credit for agricultural and related activities.",
  ],
  [
    "What is e-NAM?",
    "The National Agriculture Market is an electronic trading platform intended to connect agricultural markets and improve transparency in agricultural marketing.",
  ],
  [
    "How does the Indian government support farmers?",
    "Support includes agricultural credit, crop insurance, MSP announcements, irrigation programmes, subsidies, research, training and direct financial assistance schemes.",
  ],
  [
    "What is the role of NABARD in agriculture?",
    "The National Bank for Agriculture and Rural Development supports rural development through refinancing, financial assistance, institutional development and agricultural infrastructure initiatives.",
  ],
  [
    "What is the difference between agricultural subsidies and financial assistance?",
    "Subsidies reduce the cost of specific agricultural inputs or services, while financial assistance provides monetary support to eligible farmers or agricultural activities.",
  ],
  [
    "Why are small and marginal farmers vulnerable?",
    "They often have limited land, financial resources, bargaining power, storage facilities and access to advanced technology.",
  ],
  [
    "How does land fragmentation affect agriculture?",
    "Fragmentation divides farmland into smaller plots, making mechanisation, irrigation planning and efficient resource management more difficult.",
  ],
  [
    "What are the major agricultural problems in West Bengal?",
    "Challenges include floods, cyclones, waterlogging, small landholdings, soil degradation in certain areas, market access and post-harvest losses.",
  ],
  [
    "Which crops are commonly grown in West Bengal?",
    "Rice, jute, potato, tea, mustard, pulses and various vegetables are important crops.",
  ],
  [
    "Why is West Bengal suitable for rice cultivation?",
    "Its monsoon rainfall, river systems, fertile alluvial soils and suitable temperatures support rice cultivation.",
  ],
  [
    "How does the Ganga-Brahmaputra river system influence agriculture?",
    "It deposits fertile alluvial sediments, provides water resources and supports irrigation, although flooding and riverbank erosion can also damage farmland.",
  ],
  [
    "What agricultural challenges are associated with Indian monsoons?",
    "Delayed rainfall, uneven distribution, droughts, excessive rainfall and floods can disrupt sowing, irrigation and harvesting.",
  ],
  [
    "How can technology improve Indian agriculture?",
    "Technology can improve soil testing, irrigation efficiency, pest detection, weather forecasting, crop monitoring, market access and farm productivity.",
  ],
]

const soilScience = [
  [
    "What is soil?",
    "Soil is a natural mixture of mineral particles, organic matter, water, air and living organisms that supports plant growth.",
  ],
  [
    "How is soil formed?",
    "Soil forms through the weathering of rocks and the decomposition of organic matter over long periods.",
  ],
  [
    "What are the main components of soil?",
    "The main components are mineral matter, organic matter, water, air and living organisms.",
  ],
  [
    "What percentage of soil consists of mineral particles?",
    "In a typical ideal mineral topsoil, approximately 45% is mineral matter, 5% organic matter, 25% water and 25% air by volume. Actual proportions vary.",
  ],
  [
    "What is humus?",
    "Humus is relatively stable, decomposed organic matter in soil that helps improve soil structure, nutrient retention and water-holding capacity.",
  ],
  [
    "Why is humus important?",
    "Humus improves soil aggregation, supports microbial activity, stores nutrients and helps retain moisture.",
  ],
  [
    "What are the different soil horizons?",
    "The main horizons are O, A, E, B, C and R, although not every soil contains all of them.",
  ],
  [
    "What is topsoil?",
    "Topsoil is the uppermost mineral soil layer, commonly rich in organic matter, roots and biological activity.",
  ],
  [
    "Why is topsoil important for agriculture?",
    "It contains much of the soil's biological activity and nutrients required for healthy crop growth.",
  ],
  [
    "What is subsoil?",
    "Subsoil is the layer beneath topsoil, often containing accumulated clay, minerals and other materials.",
  ],
  [
    "What are the major soil types found in India?",
    "Major groups include alluvial, black, red, laterite, arid, forest and mountain soils.",
  ],
  [
    "What is alluvial soil?",
    "Alluvial soil is formed from sediments deposited by rivers and is often fertile and suitable for crops such as rice, wheat and sugarcane.",
  ],
  [
    "What is black soil?",
    "Black soil is a clay-rich soil, commonly associated with the Deccan region, that has high moisture-retention capacity.",
  ],
  [
    "Why is black soil suitable for cotton?",
    "Its clay content allows it to retain moisture, supporting cotton growth during relatively dry periods.",
  ],
  [
    "What is red soil?",
    "Red soil is soil that develops its reddish colour mainly from iron oxides.",
  ],
  [
    "What is laterite soil?",
    "Laterite soil develops under intense weathering and leaching, commonly in warm, humid climates.",
  ],
  [
    "What is desert soil?",
    "Desert soil develops in arid regions and often has low organic matter and limited moisture.",
  ],
  [
    "What is mountain soil?",
    "Mountain soil develops in hilly and mountainous regions and varies according to altitude, vegetation, slope and climate.",
  ],
  [
    "What is soil texture?",
    "Soil texture describes the relative proportions of sand, silt and clay particles.",
  ],
  [
    "What is the difference between sandy and clayey soil?",
    "Sandy soil has larger particles, drains quickly and generally holds less water. Clayey soil has very small particles and generally retains more water.",
  ],
  [
    "What is loamy soil?",
    "Loamy soil is a balanced mixture of sand, silt and clay, often with organic matter, that provides suitable conditions for many crops.",
  ],
  [
    "Why is loamy soil considered suitable for many crops?",
    "It generally provides a useful balance of drainage, aeration, nutrient retention and moisture availability.",
  ],
  [
    "What is soil structure?",
    "Soil structure refers to the arrangement of soil particles into aggregates or clumps.",
  ],
  [
    "How does soil structure affect plant growth?",
    "Good soil structure improves root penetration, water movement, aeration and microbial activity.",
  ],
  [
    "What is soil porosity?",
    "Soil porosity is the proportion of the soil volume occupied by pores containing air and water.",
  ],
  [
    "What is soil permeability?",
    "Soil permeability is the ability of soil to allow water or other fluids to move through it.",
  ],
  [
    "What is soil compaction?",
    "Soil compaction occurs when soil particles are pressed closer together, reducing pore space.",
  ],
  [
    "How does soil compaction affect root development?",
    "It can restrict root penetration, reduce aeration, limit water movement and interfere with nutrient uptake.",
  ],
  [
    "What is soil aeration?",
    "Soil aeration is the exchange of gases between soil pores and the atmosphere.",
  ],
  [
    "Why do plant roots need oxygen?",
    "Roots require oxygen for cellular respiration, which releases energy needed for growth and nutrient absorption.",
  ],
]

const soilChemistry = [
  [
    "What is soil pH?",
    "Soil pH is a measure of the acidity or alkalinity of soil, based on hydrogen-ion activity in the soil solution.",
  ],
  [
    "What does a pH value of 7 indicate?",
    "A pH of 7 is neutral under standard conditions.",
  ],
  ["What is acidic soil?", "Soil with a pH below 7 is classified as acidic."],
  [
    "What is alkaline soil?",
    "Soil with a pH above 7 is classified as alkaline.",
  ],
  [
    "What is the ideal pH range for many agricultural crops?",
    "Many crops grow well in slightly acidic to neutral soil, approximately pH 6.0–7.0, although crop requirements vary.",
  ],
  [
    "Why does soil pH affect nutrient availability?",
    "Soil pH influences the chemical forms and solubility of nutrients, affecting how easily plant roots can absorb them.",
  ],
  [
    "What happens when soil becomes highly acidic?",
    "Some nutrients become less available, while aluminium and manganese can reach toxic concentrations for sensitive crops.",
  ],
  [
    "What happens when soil becomes highly alkaline?",
    "Nutrients such as iron, zinc and phosphorus may become less available, potentially causing deficiencies.",
  ],
  [
    "How can farmers correct acidic soil?",
    "Agricultural lime is commonly used to raise soil pH, with the application rate determined by soil testing.",
  ],
  [
    "What is agricultural lime?",
    "Agricultural lime is a material, commonly calcium carbonate, applied to acidic soil to neutralise acidity and improve growing conditions.",
  ],
  [
    "How can soil alkalinity be managed?",
    "Soil alkalinity can be managed through appropriate amendments such as gypsum for sodic soils, organic matter addition, suitable irrigation practices and proper drainage. Treatment depends on soil testing.",
  ],
  [
    "What is soil salinity?",
    "Soil salinity is the accumulation of excessive soluble salts in soil, which makes it difficult for plant roots to absorb water.",
  ],
  [
    "What is soil sodicity?",
    "Soil sodicity refers to excessive exchangeable sodium in soil, which can damage soil structure and reduce water infiltration.",
  ],
  [
    "What is the difference between salinity and sodicity?",
    "Salinity involves excessive soluble salts, whereas sodicity involves excessive sodium attached to soil particles. Both can negatively affect crop growth.",
  ],
  [
    "How does excessive fertilizer application affect soil chemistry?",
    "It can increase soil salinity, disturb nutrient balance, change soil pH and contribute to water pollution through nutrient runoff and leaching.",
  ],
  [
    "What is electrical conductivity in soil testing?",
    "Electrical conductivity (EC) measures how easily electricity passes through a soil-water extract. It is commonly used to estimate soluble salt concentration.",
  ],
  [
    "What is cation exchange capacity?",
    "Cation exchange capacity (CEC) is the ability of soil to hold and exchange positively charged ions such as calcium, magnesium and potassium.",
  ],
  [
    "Why is cation exchange capacity important?",
    "It indicates the soil's capacity to retain and supply important nutrient cations to plants.",
  ],
  [
    "What are soil micronutrients?",
    "Micronutrients are essential plant nutrients required in relatively small quantities, including iron, zinc, copper, manganese, boron, molybdenum, chlorine and nickel.",
  ],
  [
    "What is the difference between macronutrients and micronutrients?",
    "Macronutrients are required in relatively large quantities, whereas micronutrients are required in much smaller quantities. Both are essential for healthy plant growth.",
  ],
]

const fertility = [
  [
    "What is soil fertility?",
    "Soil fertility is the ability of soil to supply essential nutrients in suitable amounts and forms for plant growth.",
  ],
  [
    "What is soil productivity?",
    "Soil productivity is the capacity of soil to produce crops under specific environmental and management conditions.",
  ],
  [
    "Are soil fertility and soil productivity the same?",
    "No. Fertility refers mainly to nutrient-supplying capacity, while productivity also considers water, climate, soil structure and management.",
  ],
  [
    "What are the primary macronutrients required by plants?",
    "Nitrogen, phosphorus and potassium are the primary macronutrients supplied through many fertilizers. Plants also require carbon, hydrogen and oxygen in large quantities.",
  ],
  [
    "What is nitrogen's role in plant growth?",
    "Nitrogen is essential for amino acids, proteins, chlorophyll and nucleic acids. It promotes healthy vegetative growth.",
  ],
  [
    "Why is phosphorus important for root development?",
    "Phosphorus supports energy transfer through ATP, root development, flowering, seed formation and early plant growth.",
  ],
  [
    "What is the role of potassium?",
    "Potassium regulates water balance, activates enzymes, supports photosynthesis and improves plant stress tolerance.",
  ],
  [
    "What is the NPK ratio?",
    "NPK represents the percentage by weight of nitrogen, phosphate expressed as P₂O₅ and potash expressed as K₂O in a fertilizer.",
  ],
  [
    "What does NPK 10:10:10 mean?",
    "It indicates that the fertilizer contains 10% nitrogen, 10% phosphate expressed as P₂O₅ and 10% potash expressed as K₂O by weight.",
  ],
  [
    "What happens when plants suffer from nitrogen deficiency?",
    "Plants commonly develop yellowing of older leaves, reduced growth and smaller leaves because nitrogen is important for chlorophyll and protein production.",
  ],
  [
    "What are the symptoms of phosphorus deficiency?",
    "Symptoms may include stunted growth, poor root development, delayed maturity and sometimes dark green or purplish leaves.",
  ],
  [
    "How can potassium deficiency be identified?",
    "It commonly causes yellowing or browning along leaf edges, weak stems and reduced stress tolerance.",
  ],
  [
    "What is calcium's role in plant development?",
    "Calcium supports cell wall formation, membrane stability, cell division and growth of root and shoot tips.",
  ],
  [
    "Why is magnesium necessary for photosynthesis?",
    "Magnesium is the central atom in the chlorophyll molecule and is therefore essential for photosynthesis.",
  ],
  [
    "What is the role of sulphur?",
    "Sulphur is required for certain amino acids, proteins, enzymes and other important plant compounds.",
  ],
  [
    "What is iron deficiency in plants?",
    "Iron deficiency commonly causes interveinal chlorosis, particularly in young leaves, where the tissue between veins becomes yellow.",
  ],
  [
    "What is zinc deficiency?",
    "Zinc deficiency can cause shortened internodes, small leaves, poor growth and reduced crop productivity.",
  ],
  [
    "Why is boron important for crops?",
    "Boron supports cell wall development, pollen germination, reproductive growth and sugar transport.",
  ],
  [
    "What are secondary nutrients?",
    "Calcium, magnesium and sulphur are classified as secondary macronutrients because plants require them in moderate quantities.",
  ],
  [
    "How can farmers identify nutrient deficiencies?",
    "Farmers can observe plant symptoms, conduct soil tests, perform plant tissue analysis and compare results with nutrient deficiency guidelines.",
  ],
  [
    "Can excessive nutrients harm plants?",
    "Yes. Excess nutrients can cause toxicity, nutrient imbalance, poor root development and environmental pollution.",
  ],
  [
    "What is nutrient leaching?",
    "Nutrient leaching is the movement of dissolved nutrients, especially nitrate, below the root zone through water.",
  ],
  [
    "What is nutrient immobilization?",
    "Nutrient immobilization occurs when soil microorganisms temporarily incorporate nutrients into their biomass, reducing their immediate availability to plants.",
  ],
  [
    "What is nutrient fixation in soil?",
    "Nutrient fixation occurs when certain nutrients become chemically or physically bound in forms that plants cannot readily absorb.",
  ],
  [
    "What is integrated nutrient management?",
    "Integrated nutrient management combines chemical fertilizers, organic manures, crop residues and biofertilizers to maintain soil fertility and crop productivity.",
  ],
]

const waterManagement = [
  [
    "What is soil moisture?",
    "Soil moisture is the amount of water present in the spaces between soil particles.",
  ],
  [
    "Why is soil moisture important for plant growth?",
    "It helps dissolve and transport nutrients, supports photosynthesis, maintains plant cells and enables essential metabolic activities.",
  ],
  [
    "What is soil moisture content?",
    "Soil moisture content is the quantity of water present in soil, generally expressed as a percentage by mass or volume.",
  ],
  [
    "What is gravimetric soil moisture?",
    "It is the mass of water present in soil divided by the mass of dry soil, usually expressed as a percentage.",
  ],
  [
    "What is volumetric soil moisture?",
    "It is the volume of water divided by the total volume of soil, usually expressed as a percentage or cubic metres per cubic metre.",
  ],
  [
    "What is field capacity?",
    "Field capacity is the amount of water soil retains after excess gravitational water has drained away.",
  ],
  [
    "What is permanent wilting point?",
    "It is the soil moisture level at which plants can no longer recover from wilting under the specified conditions.",
  ],
  [
    "What is available water capacity?",
    "It is the amount of water held between field capacity and permanent wilting point that is potentially available to plants.",
  ],
  [
    "What is the difference between field capacity and saturation?",
    "At saturation, nearly all soil pores are filled with water. At field capacity, excess gravitational water has drained and air-filled pores remain.",
  ],
  [
    "What happens when soil contains excessive water?",
    "Excess water reduces oxygen availability around roots, potentially causing waterlogging, root damage and reduced nutrient absorption.",
  ],
  [
    "What happens when soil moisture becomes too low?",
    "Plants experience water stress, which can reduce photosynthesis, slow growth, cause wilting and lower crop yields.",
  ],
  [
    "What is waterlogging?",
    "Waterlogging occurs when soil remains excessively saturated with water, leaving insufficient oxygen for healthy root activity.",
  ],
  [
    "How does waterlogging affect plant roots?",
    "It reduces oxygen supply, interferes with root respiration and can cause root decay and nutrient absorption problems.",
  ],
  [
    "What is evapotranspiration?",
    "Evapotranspiration is the combined loss of water through evaporation from surfaces and transpiration from plants.",
  ],
  [
    "What is transpiration?",
    "Transpiration is the loss of water vapour from plants, mainly through stomata in their leaves.",
  ],
  [
    "What is evaporation?",
    "Evaporation is the conversion of liquid water into water vapour from soil, water bodies and other surfaces.",
  ],
  [
    "How does temperature affect soil moisture?",
    "Higher temperatures generally increase evaporation and can increase plant water demand, causing soil to dry faster.",
  ],
  [
    "How does soil texture influence water retention?",
    "Clayey soils generally retain more water than sandy soils, while loamy soils often provide a useful balance of retention and drainage.",
  ],
  [
    "Which soil type generally retains more water?",
    "Clayey soil generally retains more total water because of its small particles and large specific surface area.",
  ],
  [
    "Why does sandy soil dry faster?",
    "Sandy soil has larger particles and relatively large pores, allowing water to drain rapidly.",
  ],
  [
    "How does organic matter improve water retention?",
    "Organic matter improves soil aggregation and can increase the soil's capacity to retain water.",
  ],
  [
    "What is irrigation scheduling?",
    "Irrigation scheduling is deciding when and how much water should be supplied to crops according to their water requirements and soil conditions.",
  ],
  [
    "How can farmers determine when to irrigate?",
    "They can use soil moisture measurements, crop growth stages, weather forecasts, evapotranspiration estimates and field observations.",
  ],
  [
    "What is water-use efficiency?",
    "Water-use efficiency describes how effectively water is used to produce a particular amount of crop growth or agricultural output.",
  ],
  [
    "How can farmers reduce agricultural water consumption?",
    "They can use drip irrigation, mulching, rainwater harvesting, suitable crop varieties, soil moisture monitoring and efficient irrigation scheduling.",
  ],
]

const irrigation = [
  [
    "What is irrigation?",
    "Irrigation is the artificial application of water to agricultural land to support crop growth.",
  ],
  [
    "Why is irrigation necessary?",
    "It supplies water when rainfall is insufficient or unreliable and helps maintain suitable soil moisture during important crop growth stages.",
  ],
  [
    "What are the major irrigation methods?",
    "Major methods include surface irrigation, sprinkler irrigation, drip irrigation and subsurface irrigation.",
  ],
  [
    "What is surface irrigation?",
    "Surface irrigation distributes water over the soil surface using gravity.",
  ],
  [
    "What is drip irrigation?",
    "Drip irrigation supplies water slowly and directly near plant roots through a network of pipes and emitters.",
  ],
  [
    "What is sprinkler irrigation?",
    "Sprinkler irrigation distributes water through pressurised pipes and sprays it over crops in droplets.",
  ],
  [
    "What is subsurface irrigation?",
    "Subsurface irrigation delivers water below the soil surface, either through buried pipes or by controlled groundwater levels.",
  ],
  [
    "Which irrigation method saves the most water in suitable conditions?",
    "Drip irrigation can achieve very high water-use efficiency because it delivers water near the root zone and reduces evaporation and runoff.",
  ],
  [
    "What are the limitations of drip irrigation?",
    "It can have high initial installation costs, emitter blockage, maintenance requirements and dependence on reliable water filtration.",
  ],
  [
    "What is fertigation?",
    "Fertigation is the application of dissolved fertilizers through an irrigation system.",
  ],
  [
    "What is automated irrigation?",
    "Automated irrigation uses controllers, sensors or programmed schedules to operate irrigation systems with reduced manual intervention.",
  ],
  [
    "How can soil moisture sensors automate irrigation?",
    "They measure soil moisture and provide readings to a controller, which can activate or deactivate irrigation according to suitable thresholds.",
  ],
  [
    "What is precision irrigation?",
    "Precision irrigation supplies water according to the specific needs of different crops or areas within a field.",
  ],
  [
    "How can artificial intelligence improve irrigation?",
    "AI can analyse soil moisture, weather, crop requirements and historical data to recommend suitable irrigation timing and quantities.",
  ],
  [
    "What is rainwater harvesting?",
    "Rainwater harvesting is the collection and storage of rainwater for later use or groundwater recharge.",
  ],
  [
    "How can farmers recharge groundwater?",
    "They can use recharge pits, percolation tanks, farm ponds and suitable rainwater harvesting structures.",
  ],
  [
    "What is watershed management?",
    "Watershed management involves conserving and managing land and water resources within a drainage area.",
  ],
  [
    "What is micro-irrigation?",
    "Micro-irrigation supplies water in small quantities directly to or near the plant root zone. Drip and micro-sprinkler systems are examples.",
  ],
  [
    "What is the difference between flood irrigation and drip irrigation?",
    "Flood irrigation distributes water across the field surface, while drip irrigation delivers water through emitters near individual plants or crop rows.",
  ],
  [
    "How can irrigation systems be powered using solar energy?",
    "Solar panels convert sunlight into electricity, which can operate pumps and irrigation controllers.",
  ],
]

const plantBiology = [
  [
    "What is photosynthesis?",
    "Photosynthesis is the process through which green plants use light energy to convert carbon dioxide and water into carbohydrates, releasing oxygen.",
  ],
  [
    "What are the raw materials required for photosynthesis?",
    "Carbon dioxide and water are the main raw materials. Light provides the energy required for the process.",
  ],
  [
    "What is chlorophyll?",
    "Chlorophyll is the green pigment that absorbs light energy for photosynthesis.",
  ],
  [
    "Why are leaves generally green?",
    "Leaves appear green because chlorophyll absorbs mainly red and blue light and reflects or transmits more green light.",
  ],
  [
    "What is respiration in plants?",
    "Plant respiration is the process through which cells break down organic molecules to release energy in the form of ATP.",
  ],
  [
    "What is transpiration in plants?",
    "It is the loss of water vapour from plant surfaces, mainly through stomata.",
  ],
  [
    "What are stomata?",
    "Stomata are tiny pores, usually present on leaf surfaces, that regulate gas exchange and water-vapour loss.",
  ],
  [
    "How do stomata regulate water loss?",
    "Guard cells control the opening and closing of stomata, regulating the movement of carbon dioxide and water vapour.",
  ],
  [
    "What is the role of roots?",
    "Roots anchor plants, absorb water and minerals and, in some plants, store food.",
  ],
  [
    "What is the function of the stem?",
    "The stem supports the plant and transports water, minerals and manufactured food between different plant parts.",
  ],
  [
    "What are the functions of leaves?",
    "Leaves primarily perform photosynthesis, gas exchange and transpiration.",
  ],
  [
    "What is germination?",
    "Germination is the process by which a viable seed begins to develop into a seedling under suitable environmental conditions.",
  ],
  [
    "What conditions are required for seed germination?",
    "Most seeds require sufficient water, oxygen and a suitable temperature. Some species also require specific light or dormancy-breaking conditions.",
  ],
  [
    "What is seed dormancy?",
    "Seed dormancy is a condition in which a viable seed does not germinate even when some apparently suitable conditions are available.",
  ],
  [
    "What is pollination?",
    "Pollination is the transfer of pollen grains from the anther to the stigma of a flower.",
  ],
  [
    "What is fertilization in flowering plants?",
    "It is the fusion of male and female gametes within the ovule, followed by the development of the seed.",
  ],
  [
    "What is the difference between self-pollination and cross-pollination?",
    "Self-pollination occurs within the same flower or plant, while cross-pollination involves pollen transfer between different plants of the same species.",
  ],
  [
    "What are plant growth hormones?",
    "Plant growth hormones, or phytohormones, are chemical substances that regulate processes such as growth, development and stress responses.",
  ],
  [
    "What is auxin?",
    "Auxin is a plant hormone involved in cell elongation, root formation, apical dominance and responses to light and gravity.",
  ],
  [
    "What is gibberellin?",
    "Gibberellin is a plant hormone that promotes processes such as stem elongation, seed germination and flowering in certain plants.",
  ],
]

const sections: Array<[string, string[][]]> = [
  ["Fundamentals of Agriculture", fundamentals],
  ["Indian Agriculture", indianAgriculture],
  ["Soil Science", soilScience],
  ["Soil pH and Soil Chemistry", soilChemistry],
  ["Soil Fertility and Plant Nutrition", fertility],
  ["Soil Moisture and Water Management", waterManagement],
  ["Irrigation Technology", irrigation],
  ["Plant Biology and Physiology", plantBiology],
]

export const agricultureQuestionBank: AgricultureQuestion[] = sections.flatMap(
  ([section, entries], sectionIndex) => {
    const previousCount = sections
      .slice(0, sectionIndex)
      .reduce((total, [, items]) => total + items.length, 0)
    return entries.map(([question, answer], index) => ({
      id: previousCount + index + 1,
      question,
      answer,
      section,
    }))
  },
)

const ignoredWords = new Set([
  "a",
  "an",
  "and",
  "are",
  "can",
  "does",
  "for",
  "how",
  "in",
  "is",
  "of",
  "the",
  "to",
  "what",
  "when",
  "which",
  "why",
])

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function keywords(value: string) {
  return new Set(
    normalize(value)
      .split(" ")
      .filter((word) => word.length > 1 && !ignoredWords.has(word)),
  )
}

export function findAgricultureAnswer(query: string) {
  const normalizedQuery = normalize(query)
  const exact = agricultureQuestionBank.find(
    (entry) => normalize(entry.question) === normalizedQuery,
  )
  if (exact) return exact

  const queryWords = keywords(query)
  if (queryWords.size === 0) return null

  let best: AgricultureQuestion | null = null
  let bestScore = 0
  for (const entry of agricultureQuestionBank) {
    const questionWords = keywords(entry.question)
    const overlap = [...queryWords].filter((word) => questionWords.has(word))
    const precision = overlap.length / queryWords.size
    const coverage = overlap.length / questionWords.size
    const score = precision * 0.55 + coverage * 0.45
    if (score > bestScore) {
      best = entry
      bestScore = score
    }
  }

  return bestScore >= 0.58 ? best : null
}
