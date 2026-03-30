const prompts = [
  {
    "id": 1,
    "title": "Wide quote card with portrait and Chinese/English customization",
    "description": "A prompt for generating a wide quote card featuring a famous person’s portrait, with a brown background, light-gold serif quote text, and layout where text occupies two-thirds and the person one-third...",
    "prompt": "A wide quote card featuring a famous person, with a brown background and a light-gold serif font for the quote: “{argument name=\"famous_quote\" default=\"Stay Hungry, Stay Foolish\"}” and smaller text: “—{argument name=\"author\" default=\"Steve Jobs\"}.” There is a large, subtle quotation mark before the text. The portrait of the person is on the left, the text on the right. The text occupies two-thirds of the image and the portrait one-third, with a slight gradient transition effect on the portrait.",
    "images": [
      "https://cms-assets.youmind.com/media/1763886933714_5zqn1e_G6QBjQHbgAE3Yt_.jpg",
      "https://cms-assets.youmind.com/media/1763886938314_wbcfc7_G6QBiiracAInQ8z.jpg",
      "https://cms-assets.youmind.com/media/1763886941069_1d9ace_G6QBii_acAIRxKd.jpg",
      "https://cms-assets.youmind.com/media/1763886946388_nwahev_G6QBikOaEAAmYkO.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "ZH",
    "featured": true,
    "raycast": true
  },
  {
    "id": 2,
    "title": "Premium liquid glass Bento grid product infographic with 8 modules",
    "description": "Create an Infographics with bento grid 8 module layout, user can specify any product name in Food, Medicine, tech etc category, choose language, Background style, Hero grid style",
    "prompt": "Input Variable: [insert product name]\nLanguage: [insert language]\n\nSystem Instruction:\nCreate an image of premium liquid glass Bento grid product infographic with 8 modules (card 2 to 8 show text titles only).\n1) Product Analysis:\n→ Identify product's dominant natural color → \"hero color\"\n→ Identify category: FOOD / MEDICINE / TECH\n2) Color Palette (derived from hero):\n→ Product + accents: full saturation hero color\n→ Icons, borders: muted hero (30-40% saturation, never black)\n3) Visual Style:\n→ Hero product: real photography (authentic, premium), 3D Glass version [choose one]\n→ Cards: Apple liquid glass (85-90% transparent) with Whisper-thin borders and Subtle drop shadow for floating depth and reflecting the background color\n→ Background stays behind cards and high blur where cards are [choose one]:\n  - Ethereal: product essence, light caustics, abstract glow\n  - Macro: product texture close-up, heavily blurred\n  - Pattern: product repeated softly at 10-15% opacity\n  - Context: relevant environment, blurred + desaturated\n→ Add subtle motion effect\n→ Asymmetric Bento grid, 16:9 landscape\n→ Hero card: 28-30% | Info modules: 70-72%\n4) Module Content (8 Cards):\nM1 — Hero: Product displayed as real photo / 3D glass / stylized interpretation (choose one)in beautiful form + product name label\nM2 — Core Benefits: 4 unique benefits + hero-color icons\nM3 — How to Use: 4 usage methods + icons\nM4 — Key Metrics: 5 EXACT data points\nFormat: [icon] [Label] [Bold Value] [Unit]\nFOOD: Calories: [X] kcal/100g, Carbs: [X]g (fiber [X]g, sugar [X]g), Protein: [X]g, [Key Vitamin]: [X]mg ([X]% DV), [Key Mineral]: [X]mg ([X]% DV)\nMEDICINE:Active: [name], Strength: [X] mg, Onset: [X] min, Duration: [X] hrs, Half-life: [X] hrs \nTECH:Chip: [model], Battery: [X] hrs, Weight: [X]g,[Key spec]: [value], Connectivity: [protocols]\nM5 — Who It's For: 4 recommended groups with green checkmark icons | 3 caution groups with amber warning icons\nM6 — Important Notes: 4 precautions + warning icons\nM7 — Quick Reference:\n→ FOOD: Glycemic Index + dietary tags with icons\n→ MEDICINE: Side effects + severity with icons\n→ TECH: Compatibility + certifications with icons\nM8 — Did You Know: 3 facts (origin, science, global stat) + icons\nOutput: 1 image, 16:9 landscape, ultra-premium liquid glass infographic.",
    "images": [
      "https://cms-assets.youmind.com/media/1768962051381_l9uih4_537980579-6f29d32a-c786-40c4-bd5a-79c640737496.png",
      "https://cms-assets.youmind.com/media/1768962076321_nu4c5q_537981099-d18d0e38-f7ac-4781-a5da-6d68e2380885.png"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": true,
    "raycast": false
  },
  {
    "id": 3,
    "title": "Hand-drawn style header image prompt from photo",
    "description": "Prompt for a hand-drawn style header image of a person introducing Nano Banana Pro",
    "prompt": "Completely recreate the uploaded person.\nMake it a header image for a note article where that person introduces “Nano Banana Pro”.\nAspect ratio: horizontal 16:9.\nStyle and colors: simple, hand-drawn style, italic, with a blue and green gradient.\nTitle text: “In-depth explanation of Google’s new AI ‘Nano Banana Pro’”.",
    "images": [
      "https://cms-assets.youmind.com/media/1763885651870_4szbai_G6VZiROagAAqsIh.jpg",
      "https://cms-assets.youmind.com/media/1763885654537_qf6h9o_G6VZiRWaIAA_9x5.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "JA",
    "featured": true,
    "raycast": false
  },
  {
    "id": 4,
    "title": "Watercolor map of Germany with labeled states",
    "description": "A German prompt to generate a watercolor-style map of Germany where all federal states are labeled in ballpoint pen, useful for educational or infographic-style maps.",
    "prompt": "Generate a map of Germany in watercolor style, on which all federal states are labeled in ballpoint pen.",
    "images": [
      "https://cms-assets.youmind.com/media/1763886061720_fzgqaq_G6RIeSZXgAA7cOf.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "DE",
    "featured": true,
    "raycast": false
  },
  {
    "id": 5,
    "title": "New Year's Day Special: Four-Panel Puzzle for 2026 Blessing",
    "description": "A detailed multi-panel prompt for Nano Banana Pro, creating a 2x2 grid photo collage where a single female character, in four different outfits and settings, pieces together a puzzle that spells '2026...",
    "prompt": "[Key: Maintain precise facial features, retain original face structure, the character in the image must be completely consistent with the uploaded reference image] High-end photo studio 2x2 grid photo. Top-left panel (Navy Blue background): The character wears a navy blue uniform-style dress, decorated with gold buttons, vintage curls with a blue beret and pearl earrings. She holds up a huge puzzle piece (top-left piece, with the number \"20\" on it) with both hands, moving it towards the center of the frame. Her eyes are focused on the central puzzle area, her expression is serious, with a slight smile. The background features navy stripes, an anchor, and the text \"Set Sail for the New Year\". Top-right panel (Cherry Blossom Pink background): The same woman wears a pink lace dress, a pearl necklace, a princess hairstyle with a pink rose hairpin and crystal earrings. She holds up the top-right puzzle piece (with the number \"26\" on it) with both hands, moving it towards the center to connect with the top-left piece. Her eyes look at the puzzle seam, her expression is focused and expectant, and her body leans forward. The background features pink cherry blossoms, the text \"Beautiful Encounter\", butterflies, and petals. Bottom-left panel (Mint Green background): The same woman wears a mint green cotton and linen dress, in an artistic style, with natural long hair, a green hairband, and wooden earrings. She holds up the bottom-left puzzle piece (with the text \"New Year's Day\" on it) with both hands, moving it upwards to connect with the top-left piece. Her eyes look at the puzzle, her expression is serious, and her mouth is slightly pursed. The background features green plants, the text \"Hope Grows\", new sprouts, and leaves. Bottom-right panel (Lemon Yellow background): The same woman wears a yellow dress with a sunflower pattern, pigtails with yellow bows. She pushes in the last bottom-right puzzle piece (with the text \"Happy\" on it) to complete the puzzle. The four pieces perfectly form the complete pattern \"2026 New Year's Day Happy\" in the center of the frame. She tilts her head back, looking at the completed puzzle, her face beaming with a successful, joyful smile. The center of the frame bursts with golden light and confetti. The background features a yellow sun, the text \"Complete Success\", smiley faces, and sunflowers. The puzzle pieces converge from the four corners to the center to form a complete picture. Clear makeup, bright ring light, 85mm lens, f/1.8 aperture, four-panel composition with puzzle interaction, fashion magazine style.",
    "images": [
      "https://cms-assets.youmind.com/media/1767455034932_ivuvu0_G9V-MszakAEAIBw.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "ZH",
    "featured": true,
    "raycast": false
  },
  {
    "id": 6,
    "title": "Vintage Patent Document for an Invention",
    "description": "A prompt designed to generate an image of a vintage United States patent document from the late 1800s. It specifies details like precise technical drawings, handwritten annotations, aged paper texture...",
    "prompt": "A vintage patent document for {argument name=\"invention\" default=\"INVENTION\"}, styled after late 1800s United States Patent Office filings. The page features precise technical drawings with numbered callouts (Fig. 1, Fig. 2, Fig. 3) showing front, side, and exploded views. Handwritten annotations in fountain-pen ink describe mechanisms. The paper is aged ivory with foxing stains and soft fold creases. An official embossed seal and red wax stamp appear in the corner. A hand-signed inventor's name and date appear at the bottom. The entire image feels like a recovered archival document—authoritative, historic, and slightly mysterious.",
    "images": [
      "https://cms-assets.youmind.com/media/1766940094520_1mg5pd_G8_m2ZVWEAAMG7y.jpg",
      "https://cms-assets.youmind.com/media/1766940095035_8t8iil_G8_mW4FWwAEwERE.jpg",
      "https://cms-assets.youmind.com/media/1766940095188_kt8ksq_G8_m_7hWoAAw19u.jpg",
      "https://cms-assets.youmind.com/media/1766940096864_fhv4oo_G8_nePrXUAAHvgn.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": true,
    "raycast": true
  },
  {
    "id": 7,
    "title": "Chalkboard-style AI news summary",
    "description": "A Japanese prompt for turning AI news content into a hand-drawn, teacher-style chalkboard diagram with explanations.",
    "prompt": "Using the following content, summarize the news in a chalkboard-style, hand‑written look, and break it down with diagrams and easy‑to‑understand expressions as if a teacher had written it.\n—-\nSearch results from Grok",
    "images": [
      "https://cms-assets.youmind.com/media/1763885620059_vzaj75_G6WfVvIbAAEgvYg.jpg",
      "https://cms-assets.youmind.com/media/1763885622901_pk1vka_G6P2CkracAINIfP.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "JA",
    "featured": true,
    "raycast": false
  },
  {
    "id": 8,
    "title": "Detailed mirror-selfie otaku room scene",
    "description": "A very detailed Nano Banana prompt describing a female mirror selfie in a blue-toned otaku computer corner, with full specifications for character, environment, lighting, camera, and negative prompts.",
    "prompt": "### Scene\nMirror selfie in an otaku-style computer corner, blue color tone.\n\n### Subject\n* Gender expression: female\n* Age: around 25\n* Ethnicity: East Asian\n* Body type: slim, with a defined waist; natural body proportions\n* Skin tone: light neutral tone\n* Hairstyle:\n    * Length: waist-length hair\n    * Style: straight with slightly curled ends\n    * Color: medium brown\n* Pose:\n    * Stance: standing in a slight contrapposto pose\n    * Right hand: holding a smartphone in front of her face (identity hidden)\n    * Left arm: naturally hanging down alongside the torso\n    * Torso: body leaning slightly back; waist and abdomen exposed\n* Clothing:\n    * Top: light blue cropped knit cardigan, top two buttons fastened; a blue French-style bra faintly visible\n    * Bottom: denim ultra-short shorts, with a blue satin ribbon bow on each side of the hips\n    * Socks: blue and white horizontal striped over-the-knee socks\n    * Accessory: a blue cute mascot phone case\n\n### Environment\n* Description: bedroom computer corner seen through a wall-mounted mirror\n* Furnishings:\n    * White desk\n    * Single monitor showing a soft blue wallpaper (no readable text)\n    * Mechanical keyboard with white keycaps on a blue desk mat\n    * Mouse on a small blue mouse pad\n    * PC tower on the right side with blue case lighting\n    * Three anime figures on or near the PC tower\n    * A poster of a pagoda on the wall\n    * Cat-shaped desk lamp with blue accents\n    * A transparent glass of water\n    * A tall green leafy plant by the window (on the left side of the frame)\n* Color replacement: replace all originally pink elements (clothes and room decor) with blue tones (baby blue to sky blue/periwinkle blue).\n\n### Lighting\n* Light source: daylight coming from a large window on the left side of the camera, through sheer curtains\n* Light quality: soft, diffused light\n* White balance (K): 5200\n\n### Camera\n* Mode: smartphone rear camera shooting via the mirror (no portrait/bokeh mode)\n* Equivalent focal length (mm): 26\n* Distances (m):\n    * Subject to mirror: 0.6\n    * Camera to mirror: 0.5\n* Exposure:\n    * Aperture (f): 1.8\n    * ISO: 100\n    * Shutter speed (s): 0.01\n    * Exposure compensation (EV): -0.3\n* Focus: focus on the torso and shorts in the mirror image\n* Depth of field: natural smartphone deep depth of field; background clearly visible with no artificial blur\n* Composition:\n    * Aspect ratio: 1:1\n    * Crop: from the top of the head to mid-thigh; include the desk, monitor, PC tower, and plant in the frame\n    * Angle: slightly high angle from the mirror’s point of view\n    * Composition note: keep the subject centered; to avoid wide-angle edge distortion, have her stand a bit further away and crop to a square later.\n\n### Negative prompts\n* Any appearance of pink/magenta anywhere\n* Beauty filters/over-smoothed skin; poreless skin look\n* Exaggerated or distorted anatomy\n* NSFW, see-through fabrics, wardrobe malfunctions\n* Logos, brand names, or readable user interface text\n* Fake portrait-mode blur, CGI/illustration feel",
    "images": [
      "https://cms-assets.youmind.com/media/1763889946850_689z0h_G23i3sJW0AASGUw.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "ZH",
    "featured": true,
    "raycast": false
  },
  {
    "id": 9,
    "title": "Edo-period Ukiyo-e reinterpretation of a modern scene",
    "description": "A highly-structured image prompt to depict a modern-day scene reimagined as an Edo-period Japanese Ukiyo-e woodblock print, with detailed guidance on anachronistic tech, composition, texture, and colo...",
    "prompt": "A Japanese Edo-period Ukiyo-e woodblock print. The overall feeling is a surreal collaboration between masters like Hokusai and Hiroshige, reimagining modern technology through an ancient lens.\n\n**The scene:** {argument name=\"modern scene\" default=\"a busy Shibuya scramble crossing\"}\n\n**Edo transformation logic:**\nCharacters wear Edo-era kimono but perform modern actions. All technology is transformed into surreal Edo equivalents:\n* Smartphones are glowing, illustrated paper scrolls being read intently.\n* Metro stations and trains are giant articulated wooden centipede carriages shuffling through crowds.\n* Skyscrapers are reimagined as endless, towering wooden pagodas reaching into dramatic clouds.\n* Robots and mecha appear as giant, armored woodblock golems.\n\nThe composition uses a flattened perspective with large, bold, hand-carved ink outlines. The background features heavily stylized Ukiyo-e wave patterns and dramatic, swirling clouds, with a distant Mt. Fuji visible on the horizon.\n\nThe image must look like a physical print, not a digital painting.\n* Texture: strong visible wood grain texture and rough paper fibers throughout the piece.\n* Printing imperfections: pigment bleeding is evident. Simulate hand-pressed plates with slight color misalignment for authenticity.\n* Color palette: strictly limited to traditional mineral pigments, with dominant use of Prussian blue, vermilion red, and muted yellow ochre.\n* Lighting: soft, flat, shadow-free lighting with no digital gradients.\n\nAspect ratio is 3:4 vertical poster. Include vertical Japanese calligraphy describing the scene and a traditional red artist seal stamp in a corner.",
    "images": [
      "https://cms-assets.youmind.com/media/1764915832381_renotr_G7FuPlzbYAAsuo2.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": true,
    "raycast": true
  },
  {
    "id": 1,
    "title": "Profile / Avatar - Ultra-Photorealistic Gamer Girl Portrait with Realistic Textures",
    "description": "A highly detailed, structured prompt for Nano Banana Pro to generate an ultra-photorealistic image of a female subject (identity preserved from reference image) in a realistic gaming/streaming setup, ...",
    "prompt": "{ \"meta\": { \"quality\": \"ultra_photorealistic, hyperreal, RAW sensor data simulation, 8k, extreme micro-detail, zero AI smoothness\", \"camera\": \"full-frame mirrorless (Sony A7R V / Canon R5), real lens optics with micro-contrast, subtle chromatic aberration, natural sensor noise\", \"lighting\": \"practical RGB LED sources only — desk LEDs, wall panels, monitor glow — physically accurate light falloff, color contamination across surfaces, soft shadow gradients, slight flicker inconsistency\", \"style\": \"true-to-life streamer environment, documentary realism, no stylization\", \"aspect_ratio\": \"16:9\" }, \"scene\": { \"location\": \"realistic gaming/streaming desk setup in a lived-in room\", \"atmosphere\": \"ambient RGB lighting with natural light spill, subtle haze in air catching LED glow, grounded real-world environment\" }, \"subject\": { \"gender\": \"female\", \"name\": \"Use uploaded reference image\", \"body\": { \"type\": \"slim, natural human proportions with slight asymmetry and realistic posture tension\" }, \"face\": { \"features\": \"Use uploaded reference image, keep identity exact — preserve exact face structure, eyes, nose, lips, proportions, natural asymmetry, no beautification\", \"expression\": \"soft confident look, relaxed gaze, micro muscle tension around eyes and mouth\" }, \"hair\": { \"color\": \"{argument name=\"hair color\" default=\"Use uploaded reference image, keep exact pastel pink tone unchanged\"}\", \"structure\": \"individual strand definition visible, multi-layered density, slight irregular parting\", \"details\": \"fine flyaway hairs catching LED rim light, subtle frizz, uneven strand thickness, slight oil sheen near roots, light scattering through semi-translucent strands\", \"behavior\": \"natural gravity-driven fall over shoulders and chest, minor displacement where hair contacts clothing\" }, \"skin\": { \"detail\": \"visible pores, micro-texture, subtle redness variation around nose and joints, slight under-eye darkness, realistic specular breakup\", \"lighting_interaction\": \"RGB light reflecting unevenly across skin, pink/blue color contamination creating realistic tonal shifts, subsurface scattering in cheeks and fingers\" }, \"outfit\": { \"description\": \"pink tie-dye long sleeve crop top with visible fabric grain, stitching seams, slight pilling and stretch marks; gray leggings with compression folds, waistband tension, and micro-wrinkles\", \"fabric_behavior\": \"realistic stretch at hips and knees, slight bunching at joints, subtle sheen from synthetic fibers\" }, \"accessories\": { \"headphones\": \"matte white plastic with micro-scratches, soft padding compression against hair, subtle shadowing\", \"footwear\": \"chunky white sneakers with visible creases, slight dirt accumulation on sole edges, realistic rubber texture and weight pressing onto desk surface\" }, \"pose\": \"seated on desk with one leg raised and bent, natural weight distribution through supporting arm, slight muscle compression at contact points, realis",
    "images": [
      "https://cms-assets.youmind.com/media/1774508275410_lfvo0m_HER6IJFbYAECE-U.jpg",
      "https://cms-assets.youmind.com/media/1774508275457_9u80n7_HER6IJAbYAIRs3J.jpg"
    ],
    "tags": [
      "profile-avatar",
      "portrait",
      "photography",
      "game-asset"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 2,
    "title": "Profile / Avatar - College Studying Candid Photo Prompt",
    "description": "A detailed JSON prompt for Nano Banana Pro to generate an ultra-photorealistic, 8K, vertical candid photo of a college athlete studying late at night in a university library, mimicking the style of a ...",
    "prompt": "{\n  \"meta\": {\n    \"aspect_ratio\": \"9:16\",\n    \"quality\": \"ultra_photorealistic\",\n    \"resolution\": \"8k\",\n    \"camera\": \"iPhone 16 rear camera\",\n    \"lens\": \"24mm wide\",\n    \"style\": \"raw iphone candid realism, natural handheld photo texture, authentic Snapchat story vibe\"\n  },\n  \"scene\": {\n    \"location\": \"university library study area\",\n    \"environment\": [\"wooden study table\", \"open textbooks and highlighters\", \"laptop with notes\", \"coffee cup\", \"quiet library background with bookshelves\"],\n    \"atmosphere\": \"casual late-night studying session\"\n  },\n  \"lighting\": {\n    \"type\": \"warm overhead library lights mixed with laptop glow\",\n    \"effect\": \"soft even illumination with gentle shadows\"\n  },\n  \"camera_perspective\": {\n    \"pov\": \"candid over-the-shoulder shot\",\n    \"angle\": \"slightly high angle\",\n    \"distance\": \"medium shot showing hands and desk\",\n    \"framing\": \"vertical 9:16 story format\"\n  },\n  \"subject\": {\n    \"pose\": \"sitting at desk, one hand holding phone taking the photo, other hand resting near notebook\",\n    \"outfit\": \"grey cropped hoodie and black athletic shorts\",\n    \"details\": \"natural college athlete studying after practice\"\n  },\n  \"image_quality\": {\n    \"focus\": \"sharp on foreground desk items with natural depth\",\n    \"realism\": \"looks like a real casual iPhone photo posted on Snapchat story\"\n  }\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774508278536_7awzit_HERsmlNX0AAcino.jpg"
    ],
    "tags": [
      "profile-avatar",
      "photography"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 3,
    "title": "Profile / Avatar - Cinematic 2x2 Grid Portrait with Consistent Identity",
    "description": "A detailed prompt for Nano Banana Pro to generate a cinematic 2x2 grid featuring a single subject in four distinct environments and moods, maintaining consistent identity across all panels. It specifi...",
    "prompt": "A cinematic 2×2 grid of a young man showing four different environments and moods with consistent identity.\n\nPanel 1: golden hour outdoor portrait with warm sunlight.  \nPanel 2: neon night street portrait with blue and pink lighting.  \nPanel 3: indoor minimal portrait with soft white background.  \nPanel 4: rainy street scene with reflections and moody lighting.\n\nThe subject wears different outfits in each panel including casual shirt, hoodie, and streetwear with dim white cargo loose baggie trousers. Smooth grid layout, thin borders, cinematic color grading, ultra realistic skin detail, 50mm lens, 8k.",
    "images": [
      "https://cms-assets.youmind.com/media/1774508261476_l96m47_HERANgUa4AA_U39.jpg"
    ],
    "tags": [
      "profile-avatar",
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 4,
    "title": "Profile / Avatar - Hyper-realistic iPhone Photo Prompt (Gemini Nano Banana)",
    "description": "A detailed prompt for Gemini Nano Banana (implied Pro or base model) to generate a hyper-realistic, ultra-sharp photograph of a young woman with a black wolf cut, emphasizing specific camera settings,...",
    "prompt": "Create image: Use the attached reference image as a visual guide for the character’s appearance, maintaining strong resemblance to the person in the reference. Preserve key visual traits such as facial structure and overall proportions, while allowing small natural variations typical of real photography. The generated subject should clearly resemble the reference while remaining a natural photographic interpretation.\nAspect Ratio: 3:4.\nA hyper-realistic, ultra-sharp photograph taken on an iPhone 15 Pro, characterized by digital clarity. Shot on a wide-angle lens, ISO 50, f/1.8. A young woman is captured mid-moment, angled 20 degrees right with a natural weight shift and one shoulder subtly lowered. Her right hand is raised near the shoulder, fingers relaxed with long white nails. She features a voluminous black wolf cut with shaggy layers and face-framing hime-style strands. Her expression is poised but intrigued; intense blue eyes stare through rimless geometric glasses while her left eyebrow shows a slight micro-arch. Her makeup is a pink 'clean girl' style with winged liner, nose blush, and blurred matte lips. Skin shows a healthy radiance with visible pores and a dewy glass finish. She wears a baby pink ribbed knit top with small pearl buttons and separate arm sleeves. Illuminated by soft, diffused front-side lighting with gentle jawline shadows. The scene is in sharp focus from fabric textures to the dark background, devoid of bokeh, with realistic digital noise.",
    "images": [
      "https://cms-assets.youmind.com/media/1774508280406_2cicel_HEQ108za8AECWag.jpg"
    ],
    "tags": [
      "profile-avatar",
      "photography"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 5,
    "title": "Profile / Avatar - Clean Minimal Studio Portrait with Playful Wink",
    "description": "A structured prompt for Nano Banana Pro to generate a clean, minimal studio portrait of a young woman (identity preserved from reference image) in a black off-shoulder dress, featuring a playful wink ...",
    "prompt": "{\n\"photo_type\":\"studio portrait, clean minimal aesthetic\",\n\n\"subject\":{\n\"type\":\"young woman\",\n\"use_reference_image\":true,\n\"face_reference\":true,\n\"preserve_identity\":true,\n\"instruction\":\"strictly use reference face, do NOT change facial structure, skin tone, eye color, or hair color\",\n\"pose\":\"leaning slightly forward, shoulders angled, playful expression with one eye wink and tongue slightly out\",\n\"expression\":\"confident, flirty, natural candid\"\n},\n\n\"appearance\":{\n\"hair\":\"same as reference image, natural texture, unchanged\",\n\"eyes\":\"same as reference image, unchanged color\",\n\"skin\":\"natural texture, soft glow, no over smoothing\",\n\"makeup\":\"soft glam, blush, glossy lips\"\n},\n\n\"outfit\":{\n\"clothing\":\"{argument name=\"clothing item\" default=\"black off-shoulder fitted dress\"}\",\n\"style\":\"elegant going-out look\"\n},\n\n\"accessories\":{\n\"details\":[\n\"gold necklace with heart pendant\",\n\"minimal earrings\"\n]\n},\n\n\"environment\":{\n\"location\":\"studio\",\n\"background\":\"plain light neutral wall\"\n},\n\n\"lighting\":{\n\"type\":\"soft studio lighting\",\n\"setup\":\"even front light, subtle shadows\"\n},\n\n\"camera\":{\n\"angle\":\"eye level\",\n\"framing\":\"tight mid portrait\",\n\"focus\":\"sharp on face\"\n},\n\n\"color_grading\":{\n\"style\":\"clean natural\",\n\"tones\":\"warm skin tones\",\n\"contrast\":\"medium\"\n},\n\n\"details\":{\n\"must_include\":[\n\"reference face unchanged\",\n\"same hair and eye color\",\n\"playful wink expression\",\n\"natural skin texture\"\n],\n\"avoid\":[\n\"face distortion\",\n\"changing identity\",\n\"AI plastic skin\",\n\"different hair color\"\n]\n}\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774508276490_oh1cvn_HEQlEQwa0AA5iBP.jpg",
      "https://cms-assets.youmind.com/media/1774508276494_x5tf4g_HEQlDN_bcAAIKSL.jpg",
      "https://cms-assets.youmind.com/media/1774508276500_23b9qb_HEQlDtMbcAAzvTk.jpg"
    ],
    "tags": [
      "profile-avatar",
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 6,
    "title": "Profile / Avatar - Soft Flash Portrait with Coquette Aesthetic",
    "description": "A detailed JSON prompt for Nano Banana Pro to generate a close-up portrait with a soft flash aesthetic. It specifies a playful pose (wink), detailed appearance (freckles, soft glam makeup), outfit (pi...",
    "prompt": "{\n\"photo_type\": \"soft flash portrait, aesthetic indoor close-up\",\n\n\"subject\": {\n\"type\": \"young woman\",\n\"use_reference_image\": true,\n\"preserve_identity\": true,\n\"pose\": \"shoulders slightly turned, head tilted, one eye closed in a playful wink\",\n\"expression\": \"soft smile, flirty and confident\"\n},\n\n\"appearance\": {\n\"hair\": \"dark brown hair with bangs, slightly messy, natural volume\",\n\"skin\": \"smooth fair skin with visible freckles across cheeks and nose, soft glow\",\n\"makeup\": \"soft glam, winged eyeliner, blush-heavy cheeks, glossy lips\"\n},\n\n\"outfit\": {\n\"clothing\": \"{argument name=\"top style\" default=\"pink floral embroidered halter top\"}\",\n\"style\": \"cute, feminine, soft aesthetic\"\n},\n\n\"accessories\": {\n\"details\": [\n\"pink butterfly hair clip on side\",\n\"minimal jewelry\"\n]\n},\n\n\"environment\": {\n\"location\": \"plain indoor background\",\n\"elements\": [\n\"beige textured wall\",\n\"clean minimal setting\"\n]\n},\n\n\"lighting\": {\n\"type\": \"direct camera flash\",\n\"setup\": [\n\"strong frontal flash\",\n\"soft shadows behind subject\",\n\"slight grain for vintage feel\"\n]\n},\n\n\"camera\": {\n\"angle\": \"eye level\",\n\"framing\": \"tight portrait close-up\",\n\"lens\": \"smartphone camera\",\n\"focus\": \"sharp on face\"\n},\n\n\"color_grading\": {\n\"style\": \"warm soft aesthetic\",\n\"tones\": \"peach and warm beige\",\n\"contrast\": \"medium\",\n\"grain\": \"subtle film grain\"\n},\n\n\"details\": {\n\"must_include\": [\n\"freckles\",\n\"wink expression\",\n\"butterfly clip\",\n\"flash lighting effect\",\n\"soft blush glow\"\n],\n\"avoid\": [\n\"over smoothing\",\n\"harsh HDR\",\n\"cold tones\",\n\"plastic skin\"\n]\n}\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774508266480_fccbtw_HEQiKd-aUAAX5fJ.jpg",
      "https://cms-assets.youmind.com/media/1774508266467_a1413k_HEQiLDsa4AE8w11.jpg",
      "https://cms-assets.youmind.com/media/1774508266517_ck1df3_HEQiJgraEAEmZMo.jpg"
    ],
    "tags": [
      "profile-avatar",
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 7,
    "title": "Profile / Avatar - Photorealistic Influencer Close-up Selfie",
    "description": "A comprehensive JSON prompt for Nano Banana 2/Pro to generate an ultra-detailed, photorealistic close-up selfie of a woman with platinum blonde hair and dense freckles. It specifies glamorous makeup, ...",
    "prompt": "{\n  \"prompt\": \"Photorealistic close-up selfie of a stunning young woman with fair skin covered in dense freckles across cheeks and nose, platinum blonde hair with dark roots and messy bangs framing her face, heavy glamorous makeup including thick black eyeliner, long false lashes, glittery eyeshadow, rosy blush, glossy pink lips with a soft natural expression, confident relaxed gaze looking slightly to the side at camera, head tilted playfully. Wearing a pink ribbed short-sleeve crop top with deep neckline. Multiple layered necklaces: black choker with dangling charms, silver chain with crescent moon pendant, longer delicate chain with colorful beads and a small white teddy bear charm with a written 'Keor' on it. Natural indoor bedroom lighting with soft shadows, messy bed and patterned blanket blurred in background. High detail skin texture with visible freckles and subtle glitter on skin, realistic hair strands, photorealistic, ultra-sharp focus on face and jewelry, intimate selfie aesthetic, 8k resolution.\",\n  \"negative_prompt\": \"blurry, low resolution, deformed face, extra limbs, bad anatomy, ugly, cartoon, anime, overexposed, harsh flash, text artifacts, watermark, other people, different hair color, smiling too wide, full body, outdoor, dark room, missing necklaces, plastic skin, distorted proportions\",\n  \"parameters\": {\n    \"aspect_ratio\": \"9:16\",\n    \"style\": \"photorealistic selfie / influencer close-up\",\n    \"quality\": \"ultra detailed, 8k, razor sharp, high dynamic range, cinematic\",\n    \"lighting\": \"soft indoor ambient + subtle warm highlights\",\n    \"camera_angle\": \"close-up selfie\",\n    \"mood\": \"confident, relaxed, playful\"\n  }\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774508263400_ucmky4_HEP3skBboAAQUhB.jpg",
      "https://cms-assets.youmind.com/media/1774508263462_zbytrd_HEP3sstXcAAhLAt.jpg",
      "https://cms-assets.youmind.com/media/1774508263830_ht6i3g_HEP3sn6bwAArTmD.jpg",
      "https://cms-assets.youmind.com/media/1774508264297_82oohj_HEP3swtbUAA30eo.jpg"
    ],
    "tags": [
      "profile-avatar",
      "portrait",
      "photography"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 8,
    "title": "Profile / Avatar - Stranger Things Action Selfie with Fish-Eye Distortion",
    "description": "A prompt for generating an ultra-realistic, intense close-up selfie of a man in a Stranger Things-themed bunker, surrounded by the main cast. It specifies a bold action pose, retro Hawkins High attire...",
    "prompt": "Ultra-realistic selfie of a man standing in a bold action-ready pose, legs slightly apart, body turned at a slight angle, one hand raised forward as if controlling energy, while the other hand rests on his bomber jacket. He's wearing a retro Hawkins High Tigers hoodie underneath the jacket.\n\nPose: Standing together with Eleven, Mike Wheeler, Dustin Henderson, Lucas Sinclair, Will, Byers, and Max Mayfield, all displaying fierce, alert expressions their eyes.\n\nBackground: Set in a \"Stranger Things\" style underground bunker - rusty metal walls, glowing warning lights, exposed cables, scattered tools, abandoned lab equipment, red emergency beacons, and swirling Upside-Down particles drifting through the air.\n\nLighting & Ambiance: Dim, moody lighting with strong shadows and a mysterious blue-red ambiance, capturing the Stranger Things aesthetic.\n\nCamera Angle: Intense close-up selfie with strong fish-eye distortion, enhancing depth and realism",
    "images": [
      "https://cms-assets.youmind.com/media/1774508271047_bejt7y_HEObXGebAAA5Oxl.jpg",
      "https://cms-assets.youmind.com/media/1774508271041_znj24s_HEObW1Fa4AABL09.jpg"
    ],
    "tags": [
      "profile-avatar",
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 9,
    "title": "Profile / Avatar - Photorealistic Hand Holding Transparent Acrylic Profile Card",
    "description": "A detailed prompt for Nano Banana 2 to generate a photorealistic image of a woman's hand holding a transparent acrylic card. The card is designed to display a social media profile layout, complete wit...",
    "prompt": "Please generate an image based on the attached X profile screenshot using the following prompt:\nA photorealistic woman's hand with beautiful nail art holding a transparent acrylic card with frosted glass effect. The card displays the exact same profile layout as the attached screenshot. The header image at the top of the card is displayed as-is without any transparency effect, showing the original header design clearly. Card has rounded corners and a thin golden rim light edge. The card is held against a clean white background with soft natural light streaming in. Cinematic lighting, ultra-realistic, 8K, product photography style. Aspect ratio 4:5 vertical portrait orientation.",
    "images": [
      "https://cms-assets.youmind.com/media/1774508282247_9bmjw5_HEOH_83bwAAkFZf.jpg"
    ],
    "tags": [
      "profile-avatar",
      "photography"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 10,
    "title": "Profile / Avatar - Casual smartphone photo of a tattooed woman in a bedroom",
    "description": "A detailed JSON prompt for Nano Banana Pro designed to mimic a casual, intimate, everyday smartphone photo. The prompt specifies a young woman with platinum blonde hair and visible tattoos (red koi fi...",
    "prompt": "{\n  \"aspect_ratio\": \"3:4\",\n  \"photo_style\": \"casual everyday smartphone photo\",\n  \"subject\": \"A young woman with long, messy platinum blonde wavy hair and dark roots, wearing a simple grey and pink tank top. She has visible tattoos on her forearm, including a red koi fish and a dark tribal design. She is resting on her stomach, looking directly at the camera with a relaxed expression, her hand near her mouth with long red almond-shaped nails.\",\n  \"environment\": \"An indoor bedroom setting with a grey tufted headboard, black bedding, and a white textured 'cloud' style pendant light hanging from a plain ceiling.\",\n  \"composition\": \"Close-up portrait shot from a slightly high angle looking down, subject centered in the frame, informal and spontaneous framing.\",\n  \"camera\": {\n    \"angle\": \"slightly high angle, looking down\",\n    \"distance\": \"close-up\",\n    \"perspective\": \"first-person point of view, handheld phone camera perspective\",\n    \"depth_of_field\": \"deep focus\"\n  },\n  \"lighting\": {\n    \"type\": \"natural light\",\n    \"source\": \"ambient indoor light from an unseen window\",\n    \"shadow_softness\": \"soft natural shadows\",\n    \"exposure\": \"normal\"\n  },\n  \"color_science\": {\n    \"style\": \"natural colors\",\n    \"white_balance\": \"neutral\",\n    \"contrast\": \"normal\"\n  },\n  \"materials_and_textures\": \"Soft fabric of the tank top, skin texture, fine hair strands, quilted velvet headboard, gold jewelry on the wrist.\",\n  \"atmosphere\": \"Casual, intimate, and everyday; a personal snapshot taken at home.\",\n  \"generation_prompt\": \"A casual everyday smartphone photo with a 3:4 aspect ratio. A young woman with long, messy {argument name=\"hair color\" default=\"platinum blonde\"} wavy hair and dark roots is lying on her stomach on a bed with black sheets and a grey tufted headboard. She has a red koi fish tattoo on her forearm and is wearing a simple grey tank top. She looks at the camera with a relaxed expression, her hand with long red nails resting near her lips. The lighting is simple, natural indoor light with no professional effects. The entire scene is in deep focus, including the white textured lamp in the background. The colors are natural and unedited, with the slight grain and sharpness of a standard mobile phone camera. No background blur, no cinematic lighting, just a realistic home snapshot.\"\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774421481186_34qfz6_HEM69kdW8AA6-vH.jpg"
    ],
    "tags": [
      "profile-avatar"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 11,
    "title": "Profile / Avatar - High-fashion editorial portrait with vivid orange accents",
    "description": "A highly structured JSON prompt for Nano Banana Pro to generate an ultra-detailed, high-fashion editorial portrait. The prompt requires using a reference image for the subject's identity and facial fe...",
    "prompt": "{\n  \"character\": {\n    \"identity\": \"custom person based on reference image\",\n    \"reference_image\": \"use provided reference image for facial features, proportions, and identity\",\n    \"skin_tone\": \"match reference image exactly\",\n    \"face\": \"replicate facial structure, symmetry, and defining features from reference image\",\n    \"eyes\": \"match eye shape, color, and expression from reference image\",\n    \"lips\": \"match lip shape, fullness, and natural color from reference image\"\n  },\n  \"hair\": {\n    \"style\": \"messy updo, loosely tied back\",\n    \"texture\": \"slightly damp with soft wispy strands framing the face\",\n    \"color\": \"match reference image\"\n  },\n  \"accessories\": {\n    \"earrings\": \"medium-sized hoop earrings, glossy bright {argument name=\"accent color\" default=\"orange\"}\",\n    \"sunglasses\": \"narrow oval sunglasses, black frame with vivid orange tinted lenses, worn low on the nose below the eyes\"\n  },\n  \"makeup\": {\n    \"style\": \"soft natural glam adapted to subject\",\n    \"skin_finish\": \"radiant natural glow\",\n    \"eyes\": \"light mascara, subtle definition enhancing natural eye shape\",\n    \"lips\": \"natural tinted gloss matching subject\"\n  },\n  \"outfit\": {\n    \"top\": \"sleeveless textured knit top, vivid saturated orange\",\n    \"material\": \"slightly glossy, modern fabric with subtle texture\",\n    \"color_emphasis\": \"high saturation orange tones, bright and vibrant\"\n  },\n  \"pose\": {\n    \"hand_position\": \"one hand raised to mouth, index finger lightly touching lower lip\",\n    \"expression\": \"playful, slightly teasing smile adapted to subject\",\n    \"shoulders\": \"relaxed, facing forward\"\n  },\n  \"gaze\": {\n    \"direction\": \"direct eye contact over the lowered sunglasses\",\n    \"emotion\": \"confident, playful, engaging\"\n  },\n  \"mood\": {\n    \"overall\": \"playful, modern, stylish\",\n    \"energy\": \"light, fresh, confident\"\n  },\n  \"lighting\": {\n    \"type\": \"bright soft studio lighting\",\n    \"style\": \"even illumination, minimal shadows\",\n    \"highlight\": \"soft highlights on skin and glossy elements\",\n    \"contrast\": \"low to medium contrast, clean look\"\n  },\n  \"camera\": {\n    \"type\": \"DSLR, high resolution\",\n    \"settings\": \"85mm lens, f/2.8 aperture, ISO 100, sharp focus on eyes\",\n    \"quality\": \"ultra-detailed, crisp, high fashion editorial\"\n  },\n  \"angle\": {\n    \"view\": \"front-facing\",\n    \"crop\": \"tight close-up portrait, head and upper shoulders\",\n    \"framing\": \"centered composition\"\n  },\n  \"background\": {\n    \"type\": \"plain studio background\",\n    \"color\": \"light gray / off-white\",\n    \"style\": \"clean, minimal, no distractions\"\n  },\n  \"color_style\": {\n    \"palette\": \"dominant bright orange accents contrasted with neutral tones\",\n    \"saturation\": \"high saturation on orange elements\",\n    \"center_emphasis\": \"central subject and orange elements extra vibrant and luminous\"\n  },\n  \"rendering\": {\n    \"style\": \"modern fashion editorial photography\",\n    \"detail\": \"realistic skin texture with visible pores\",\n    \"finish\"}",
    "images": [
      "https://cms-assets.youmind.com/media/1774421482534_7yxs38_HEMkTZ-aIAI5y0s.jpg",
      "https://cms-assets.youmind.com/media/1774421482580_olcppc_HEMkvyYaIAAhBbL.jpg",
      "https://cms-assets.youmind.com/media/1774421482545_eurmyv_HEMkTZbWgAALbnJ.jpg",
      "https://cms-assets.youmind.com/media/1774421483085_q3k8ds_HEMle2DaAAAzehK.jpg"
    ],
    "tags": [
      "profile-avatar"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 12,
    "title": "Profile / Avatar - Hyper-Realistic Smartphone Selfie Prompt for Gemini Nano Banana",
    "description": "A highly detailed prompt for Gemini Nano Banana to generate a hyper-realistic, ultra-sharp smartphone photograph (iPhone 15 Pro style) of a young woman taking a wide-angle selfie at the Piazza del Duo...",
    "prompt": "Create image: 8k UHD, slightly desaturated color palette. Use the attached reference image as a visual guide for the character’s appearance. Preserve key visual traits such as facial structure and overall proportions, while allowing small natural variations typical of real photography. The generated subject should clearly resemble the reference while remaining a natural photographic interpretation.\nAspect Ratio: 3:4.\nA hyper-realistic, ultra-sharp photograph taken on a modern smartphone, specifically an iPhone 15 Pro, characterized by its digital clarity. Shot on a modern high-end smartphone camera, wide-angle lens, ISO 50, f/1.8. The subject is a young woman in her early 20s, captured in a spontaneous, wide-angle selfie pose at the Piazza del Duomo in Pisa. Her right arm is extended forward toward the lens, creating a prominent foreshortened perspective, while her torso is angled 20 degrees to the left with her right shoulder naturally elevated. She has ash-blonde hair styled in shaggy layers with soft curtain bangs that appear slightly wind-tossed. Her expression is radiant and beaming, layered with a subtle nose scrunch from the bright sun; her eyes are partially visible behind dark brown tortoiseshell oval sunglasses, showing a joyful squint. Her skin exhibits a healthy radiance and a rosy warmth, featuring visible pores and a clear, dewy texture with soft highlights on the bridge and tip of the nose. She wears glossy, natural pinkish-mauve lips with a subtle shimmer and a subtle blush applied with high placement on the cheekbones. She is dressed in a crisp, white linen button-down shirt with a visible breast pocket and slightly wrinkled fabric texture, paired with a stack of various cream-colored beaded and pearl bracelets on her extended wrist. A large white canvas tote bag with thick straps is slung over her left shoulder. The background features the Leaning Tower of Pisa in microscopic detail, showing the intricate marble arches and weathered stone textures against a vibrant blue sky with scattered wispy clouds. The entire scene is rendered in incredibly sharp focus, from the foreground bracelets to the distant green hedges and white information kiosks, without any background blur or bokeh. The lighting is characterized by soft daylight that enhances the rosy skin tones and preserves a natural, low-contrast digital texture devoid of film grain.",
    "images": [
      "https://cms-assets.youmind.com/media/1774421484409_qf7mar_HEJxFPyaIAQ2YLa.jpg"
    ],
    "tags": [
      "profile-avatar",
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 13,
    "title": "Profile / Avatar - Minimalist Cinematic Portrait Prompt for Nano Banana 2",
    "description": "A prompt for Nano Banana 2 to create a minimalist cinematic side-profile portrait of a young man wearing round glasses and a black turtleneck, emphasizing neon purple and blue lighting, high contrast,...",
    "prompt": "Create a minimalist cinematic side-profile portrait of a young man with round glasses and black turtleneck,  Neon purple and blue lighting, high contrast, deep shadows, glowing highlights, gradient background. Ultra-realistic, 85mm, studio, sharp focus, editorial style.",
    "images": [
      "https://cms-assets.youmind.com/media/1774334457237_mr6pwd_HEG1AbsawAELf11.jpg",
      "https://cms-assets.youmind.com/media/1774334458158_b9o73a_HEG1AbybwAAjDh0.jpg"
    ],
    "tags": [
      "profile-avatar",
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 14,
    "title": "Profile / Avatar - Luxury Mirror Selfie Prompt for Nano Banana Pro",
    "description": "A detailed JSON prompt for Nano Banana Pro to generate a high-contrast, glamorous mirror selfie in a luxury indoor night aesthetic. The prompt specifies the subject's pose (sitting, holding a phone), ...",
    "prompt": "{\n\"photo_type\": \"mirror selfie, luxury indoor night aesthetic\",\n\n\"subject\": {\n\"type\": \"young woman\",\n\"use_reference_image\": true,\n\"preserve_identity\": true,\n\"pose\": \"sitting on a chair, slightly angled body, one arm resting, other hand holding phone in front of face\",\n\"expression\": \"calm, confident, slightly serious gaze, lips relaxed\"\n},\n\n\"appearance\": {\n\"hair\": \"long, straight black hair, center part, smooth and glossy\",\n\"skin\": \"smooth, soft glow, warm tone, natural texture\",\n\"makeup\": \"soft glam, defined brows, subtle contour, glossy lips\"\n},\n\n\"outfit\": {\n\"clothing\": \"tight {argument name=\"dress color\" default=\"red\"} mesh dress with cutout details on chest, fitted sleeves with pearl accents\",\n\"style\": \"bold, glamorous, revealing but elegant\",\n\"accessories\": [\n\"red headpiece or crown with small decorative elements\",\n\"subtle necklace\"\n]\n},\n\n\"environment\": {\n\"location\": \"modern luxury hotel room\",\n\"elements\": [\n\"beige curtains\",\n\"warm ambient lamps\",\n\"round wall mirrors\",\n\"dark furniture\",\n\"soft indoor lighting\"\n]\n},\n\n\"lighting\": {\n\"type\": \"mixed lighting\",\n\"setup\": [\n\"strong phone flash hitting subject directly\",\n\"warm ambient room lighting in background\",\n\"high contrast between subject and background\",\n\"slight shadows behind subject\",\n\"skin highlights from flash\"\n]\n},\n\n\"camera\": {\n\"device\": \"iPhone front camera via mirror\",\n\"angle\": \"slightly above chest level\",\n\"framing\": \"mid-body selfie\",\n\"focus\": \"sharp on subject, slight falloff in background\"\n},\n\n\"color_grading\": {\n\"style\": \"high contrast Instagram aesthetic\",\n\"tones\": \"warm highlights, slightly muted shadows\",\n\"skin\": \"golden glow\",\n\"overall\": \"clean but slightly cinematic\"\n},\n\n\"details\": {\n\"must_include\": [\n\"phone visible in frame\",\n\"flash reflection look\",\n\"realistic skin texture\",\n\"natural shadows and highlights\",\n\"luxury indoor vibe\"\n],\n\"avoid\": [\n\"over-smoothing skin\",\n\"plastic look\",\n\"flat lighting\",\n\"AI artifacts\"\n]\n}\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774334461283_2zvcxs_HEGn2fIbMAAJGtF.jpg",
      "https://cms-assets.youmind.com/media/1774334461345_iu0apo_HEGn3TgbMAAcdAB.jpg",
      "https://cms-assets.youmind.com/media/1774334461433_eldccc_HEGn1w6bsAAjrmS.jpg",
      "https://cms-assets.youmind.com/media/1774334462243_h7c9kk_HEGn34KbQAA94JQ.jpg"
    ],
    "tags": [
      "profile-avatar",
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 15,
    "title": "Profile / Avatar - Studio Portrait with Red Gradient Background Prompt for Nano Banana Pro",
    "description": "A prompt for Nano Banana Pro to transform an uploaded image into a clean, polished studio-style portrait. The prompt specifies a deep red gradient background with soft vertical panel textures, and det...",
    "prompt": "Turn my uploaded image into a clean studio-style portrait with a deep red gradient background and soft vertical panel textures. The subject is wearing a {argument name=\"jacket color\" default=\"maroon\"} oversized puffer jacket, a festive patterned sweater, and a cap with glasses, holding a large red-and-white candy cane. Use soft cinematic lighting, sharp focus, vibrant colors, and a polished commercial photography look. No text, no logos, no UI elements.",
    "images": [
      "https://cms-assets.youmind.com/media/1774334464115_qjhoym_HEGYqviaQAAobQb.jpg"
    ],
    "tags": [
      "profile-avatar",
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 16,
    "title": "Profile / Avatar - Cinematic Cyberpunk Portrait Pair",
    "description": "Two similar, highly detailed cinematic studio portrait prompts for Gemini Nano Banana Pro, one for a young man and one for a young woman, both featuring a black turtleneck, dark minimal background, dr...",
    "prompt": "Cinematic studio portrait of a young man with messy textured hair, wearing a black turtleneck, centered composition, dark minimal background, dramatic low-key lighting, a horizontal red neon light strip cutting across his eyes, strong contrast shadows covering lower face, intense gaze, moody atmosphere, cyberpunk aesthetic, ultra-realistic, sharp focus, 85mm lens, shallow depth of field, high detail, editorial photography style.\n\nPrompt 2 (Female portrait):\nCinematic studio portrait of a young woman with slightly messy tied-back hair, wearing a black turtleneck, centered composition, dark minimal background, dramatic low-key lighting, a horizontal red neon light strip across her eyes, soft yet intense expression, deep shadows on lower face, high contrast, moody cyberpunk vibe, ultra-realistic, sharp focus, 85mm lens, shallow depth of field, high detail, editorial fashion photography.",
    "images": [
      "https://cms-assets.youmind.com/media/1774334467084_n80113_HEEJJiabQAAsXUQ.jpg",
      "https://cms-assets.youmind.com/media/1774334467153_vewlnq_HEEJJiXaIAABJgw.jpg"
    ],
    "tags": [
      "profile-avatar",
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 17,
    "title": "Profile / Avatar - Ana de Armas Summer Watermelon Selfie",
    "description": "A structured JSON prompt designed to generate an outdoor, candid summer selfie featuring Ana de Armas holding a slice of watermelon close to her mouth, utilizing harsh direct sunlight and a raw smartp...",
    "prompt": "{\n\"photo_type\": \"outdoor summer selfie, candid lifestyle\",\n\"subject\": {\n\"count\": 1,\n\"use_reference_face\": true,\n\"preserve_identity\": true,\n\"appearance\": \"{argument name=\"subject appearance\" default=\"Ana de Armas, wet hair, natural skin, minimal makeup, Use uploaded reference image, keep identity exact\"}\"\n},\n\"pose\": {\n\"description\": \"holding a slice of watermelon close to mouth, lips touching fruit, one eye slightly closed\",\n\"expression\": \"playful, relaxed, sun-kissed mood\"\n},\n\"camera\": {\n\"device\": \"front camera smartphone selfie\",\n\"perspective\": \"handheld close-up\",\n\"angle\": \"slightly low and very close to face\",\n\"tilt\": \"subtle upward tilt\",\n\"distance\": \"arm-length, tight framing\",\n\"framing\": \"face fills most of frame, hand and watermelon in foreground\",\n\"lens\": \"wide smartphone lens (24-28mm equivalent)\",\n\"focus\": \"sharp on face and fruit\"\n},\n\"composition\": {\n\"subject_position\": \"center\",\n\"foreground\": \"hand holding watermelon partially blocking lower face\",\n\"background\": \"palm trees, sky, beach blur\"\n},\n\"lighting\": {\n\"type\": \"direct harsh sunlight\",\n\"direction\": \"from above and slightly behind\",\n\"effect\": [\n\"strong highlights on forehead, nose, cheeks\",\n\"deep natural shadows under chin and hair\",\n\"sun glow around hair edges\",\n\"slight overexposure on highlights\"\n]\n},\n\"color_grading\": {\n\"style\": \"warm summer tones\",\n\"temperature\": \"slightly warm\",\n\"contrast\": \"medium-high\",\n\"saturation\": \"natural with boosted reds and greens\"\n},\n\"details\": {\n\"skin_texture\": \"real, slightly glossy from sunlight\",\n\"hair\": \"wet strands, natural messiness\",\n\"finish\": \"raw iPhone look, no heavy editing\"\n},\n\"rules\": {\n\"lock_camera_angle\": true,\n\"avoid\": [\n\"studio lighting\",\n\"perfect symmetry\",\n\"over-smooth skin\",\n\"wide distance shots\"\n]\n}\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774248313556_kkh2gw_HEBmNUvaEAA84lL.jpg"
    ],
    "tags": [
      "profile-avatar",
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 18,
    "title": "Profile / Avatar - Outdoor Summer Watermelon Selfie (Detailed JSON)",
    "description": "A structured JSON prompt for generating an outdoor, candid summer selfie. The prompt specifies holding a slice of watermelon close to the mouth, using direct harsh sunlight, and aiming for a raw smart...",
    "prompt": "{   \"photo_type\": \"outdoor summer selfie, candid lifestyle\",    \"subject\": {     \"count\": 1,     \"use_reference_face\": true,     \"preserve_identity\": true,     \"appearance\": \"{argument name=\"subject appearance\" default=\"wet hair, natural skin, minimal makeup\"}\"   },    \"pose\": {     \"description\": \"holding a slice of watermelon close to mouth, lips touching fruit, one eye slightly closed\",     \"expression\": \"playful, relaxed, sun-kissed mood\"   },    \"camera\": {     \"device\": \"front camera smartphone selfie\",     \"perspective\": \"handheld close-up\",     \"angle\": \"slightly low and very close to face\",     \"tilt\": \"subtle upward tilt\",     \"distance\": \"arm-length, tight framing\",     \"framing\": \"face fills most of frame, hand and watermelon in foreground\",     \"lens\": \"wide smartphone lens (24-28mm equivalent)\",     \"focus\": \"sharp on face and fruit\"   },    \"composition\": {     \"subject_position\": \"center\",     \"foreground\": \"hand holding watermelon partially blocking lower face\",     \"background\": \"palm trees, sky, beach blur\"   },    \"lighting\": {     \"type\": \"direct harsh sunlight\",     \"direction\": \"from above and slightly behind\",     \"effect\": [       \"strong highlights on forehead, nose, cheeks\",       \"deep natural shadows under chin and hair\",       \"sun glow around hair edges\",       \"slight overexposure on highlights\"     ]   },    \"color_grading\": {     \"style\": \"warm summer tones\",     \"temperature\": \"slightly warm\",     \"contrast\": \"medium-high\",     \"saturation\": \"natural with boosted reds and greens\"   },    \"details\": {     \"skin_texture\": \"real, slightly glossy from sunlight\",     \"hair\": \"wet strands, natural messiness\",     \"finish\": \"raw iPhone look, no heavy editing\"   },    \"rules\": {     \"lock_camera_angle\": true,     \"avoid\": [       \"studio lighting\",       \"perfect symmetry\",       \"over-smooth skin\",       \"wide distance shots\"     ]   } }",
    "images": [
      "https://cms-assets.youmind.com/media/1774248315058_uq2rqy_HEBiUV1boAAomLI.jpg",
      "https://cms-assets.youmind.com/media/1774248314993_5qshj1_HEBiUXMagAAbas2.jpg",
      "https://cms-assets.youmind.com/media/1774248315063_q4temv_HEBiUZubEAAafMS.jpg"
    ],
    "tags": [
      "profile-avatar",
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 19,
    "title": "Profile / Avatar - Late Night Apartment Portrait (iPhone Realism)",
    "description": "A highly detailed Nano Banana 2 prompt for generating an ultra-photorealistic vertical image of a woman kneeling on a sofa in a high-rise apartment at night, emphasizing iPhone realism, specific cloth...",
    "prompt": "{\n  \"meta\": {\n    \"aspect_ratio\": \"9:16 vertical\",\n    \"camera\": \"iPhone 17 Pro Max (rear camera)\",\n    \"lens_simulation\": \"24mm wide\",\n    \"quality\": \"ultra-photorealistic, natural iPhone HDR\",\n    \"time_of_day\": \"11:38 PM\",\n    \"lighting_temperature\": \"warm tungsten 3200K\",\n    \"style\": \"raw iphone realism, subtle handheld micro-tilt, authentic skin texture, slight shadow grain\"\n  },\n  \"scene\": {\n    \"location\": \"modern high-rise apartment living room\",\n    \"background_elements\": [\n      \"floor-to-ceiling city skyline windows at night\",\n      \"soft amber lamp glow on textured wall\",\n      \"neutral beige sectional sofa with real fabric compression\",\n      \"subtle reflections on polished wood floor\"\n    ],\n    \"atmosphere\": \"late-night intimate quiet energy\"\n  },\n  \"subject\": {\n    \"identity_lock\": \"exact facial structure and body proportions preserved\",\n    \"pose\": {\n      \"position\": \"kneeling sideways on sofa cushion\",\n      \"hips\": \"angled back slightly\",\n      \"torso\": \"twisted toward camera emphasizing waist curve\",\n      \"arms\": \"one hand resting behind her on cushion, other lightly touching collarbone\",\n      \"head\": \"slightly tilted down, eyes looking up through lashes\"\n    },\n    \"expression\": \"calm, magnetic, soft parted lips\",\n    \"hair\": \"light blonde, straight, natural fall with loose face-framing strands\",\n    \"outfit\": {\n      \"top\": \"thin champagne satin bralette, tight tension across bust, no bra lines\",\n      \"bottom\": \"micro lounge shorts, soft grey cotton, subtle fabric stretch at hips\"\n    }\n  },\n  \"lighting\": {\n    \"primary\": \"warm lamp spill from camera-right\",\n    \"secondary\": \"cool city glow rim light\",\n    \"effect\": \"soft highlight rolloff on thighs and collarbones, realistic shadow falloff\"\n  },\n  \"photography\": {\n    \"depth_of_field\": \"moderate natural smartphone depth\",\n    \"handheld_realism\": \"slight framing imperfection\",\n    \"color_science\": \"true-to-life warm skin tones, restrained HDR\"\n  }\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774248318334_yjwym1_HCfJXWIX0AAgTy3.jpg",
      "https://cms-assets.youmind.com/media/1774248318359_px6jlw_HCfJXWOXIAAsq8Y.jpg"
    ],
    "tags": [
      "profile-avatar",
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 20,
    "title": "Social Media Post - Train-ad style book advertisement image",
    "description": "A detailed Japanese prompt for generating a 16:9 business-book-style advertisement featuring a specific book image with Japanese copy points.",
    "prompt": "Please generate an advertisement image.\n\n==== Ad specifications ===\n- Aspect ratio: 16:9 (horizontal)\n- Product to advertise: the book in the first attached image\n- Main eye-catcher: place the book from the first attached image in a three-dimensional way\n- Language: Japanese\n- Taste: advertisement for a business book\n\n# Text to include:\n- Pre-head copy: 【New print run decided about one week after release】\n\nBook “{argument name=\"book_title_en\" default=\"Designing from Zero with AI\"}” now on sale and doing well.\n\nAmazon Best Seller Ranking\nRanked No.1 in commercial design sales (as of 10/15)\nhttps://t.co/QxbYpfFVj6",
    "images": [
      "https://cms-assets.youmind.com/media/1763885539326_yao7in_G6WBYReawAAcp2x.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "JA",
    "featured": false,
    "raycast": true
  },
  {
    "id": 21,
    "title": "Social Media Post - Realistic port scene in Salvador, Bahia",
    "description": "A prompt for Nano Banana 2 (not Pro, but Nano Banana 2 is often used interchangeably or is a predecessor/variant) to generate a realistic image of a beautiful port in Salvador, Bahia, Brazil, featurin...",
    "prompt": "Realistic image of a beautiful port in the city of Salvador, Bahia, Brazil. Focus on a calm sea view with several colorful wooden fishing boats (especially {argument name=\"boat colors\" default=\"red, white, and blue\"}) floating on clear, turquoise blue seawater. In the background, there are hills filled with historic settlements (favelas) with colorful houses, as well as towering modern skyscrapers. The sky is bright with a clear blue color and thin white clouds, and soft morning sunlight illuminates the entire scene, 4k resolution, aspect ratio 3:2.",
    "images": [
      "https://cms-assets.youmind.com/media/1774508283300_td38ux_HEUVznCa8AArU31.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 22,
    "title": "Social Media Post - Vibrant Sticker Art Illustration of a Young Woman",
    "description": "A prompt for Gemini Nano Banana Pro 2.0 to create a high-resolution 2D digital illustration in a vibrant sticker art style, featuring a young woman with a thick white outline against a rainbow gradien...",
    "prompt": "A high-resolution, highly detailed 2D digital illustration in a vibrant sticker art style. Soft, even lighting illuminates a centered medium portrait of a young woman [ use the uploaded photo as reference] with long dark wavy hair, wearing a ribbed pink sweater and blue jeans, sitting on a stool. She features a thick white sticker-like outline. The background consists of a torn paper effect revealing a bright rainbow gradient. Scattered around her are cute doodle stickers including a smiling cloud, hearts, stars, lightning bolts, coffee cups, and a text cutout reading \"{argument name=\"text cutout\" default=\"NOW!\"}\". The overall mood is cheerful, youthful, and energetic.",
    "images": [
      "https://cms-assets.youmind.com/media/1774508272267_s2x8fl_HESl_xqWUAAGD4J.jpg",
      "https://cms-assets.youmind.com/media/1774508272259_tw2t6h_HESl_yIbYAMhInn.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 23,
    "title": "Social Media Post - Cinematic Portrait on a Rooftop Ledge at Golden Hour",
    "description": "A detailed narrative prompt for Nano Banana to generate an award-winning cinematic portrait of a charismatic man perched on a concrete rooftop ledge, set against an urban skyline during golden hour, e...",
    "prompt": "\"Award-winning cinematic portrait of a charismatic man perched confidently on the edge of a weathered concrete rooftop ledge, his legs dangling freely into the urban abyss below. Golden hour sunlight filters through the cityscape, casting dramatic rim lighting around his silhouette while creating a warm amber glow on his rich brown skin. He sports vintage aviator sunglasses that reflect the sprawling metropolis, a perfectly worn cognac leather jacket over a crisp white henley that catches the breeze. His tousled curls dance in the wind as he flashes an enigmatic, knowing smile directly at the camera. Behind him, a forest of glass and steel skyscrapers stretches toward infinity, their surfaces gleaming like mirrors in the late afternoon sun. Shot with a 85mm lens at f/1.8 for dreamy bokeh, the composition follows the rule of thirds with the subject positioned dynamically against the geometric urban landscape. The color grading emphasizes warm oranges and deep teals, creating that coveted cinematic contrast. Captured from a low angle to enhance his commanding presence against the dramatic sky filled with wispy clouds.\"",
    "images": [
      "https://cms-assets.youmind.com/media/1774508273222_engawp_HEQwtIUbQAEHO3V.jpg"
    ],
    "tags": [
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 24,
    "title": "Social Media Post - White Ballroom Dance Editorial Grid (2x2)",
    "description": "A structured prompt for generating a photorealistic 2x2 editorial grid featuring one elegant woman with consistent facial identity across all panels. She is styled as a modern princess in a luxurious ...",
    "prompt": "{\n  \"generation_request\": {\n    \"meta_data\": {\n      \"tool\": \"NanoBanana Pro\",\n      \"task_type\": \"white_ballroom_dance_editorial_2x2_grid\",\n      \"language\": \"en\",\n      \"priority\": \"highest\",\n      \"version\": \"v1.0_WHITE_PRINCESS_DANCE_GRID\"\n    },\n    \"input\": {\n      \"mode\": \"text_to_image\",\n      \"notes\": \"Create a photoreal 2x2 editorial grid featuring one elegant adult woman across four panels. She should have the same facial identity in all four panels and appear like a modern princess in a grand white gown with a tiara and long white opera gloves. The dress should be a luxurious off-shoulder or strapless white ball gown with delicate floral embroidery, soft green vine-like detailing, couture volume, and regal movement. The mood should feel joyful, graceful, romantic, and refined, inspired by a royal ballroom dance moment. Every panel should show a different dance-related pose or candid movement, but the woman must remain the same. The background in all four panels must be bright white or very pale ivory, clean and elegant, with no dark ballroom background. Keep the result airy, luminous, aristocratic, and timeless.\"\n    },\n    \"output_settings\": {\n      \"aspect_ratio\": \"4:5\",\n      \"orientation\": \"portrait\",\n      \"resolution_target\": \"ultra_high_res\",\n      \"num_images\": 1,\n      \"layout\": {\n        \"type\": \"grid\",\n        \"rows\": 2,\n        \"cols\": 2,\n        \"gutter\": \"thin\",\n        \"outer_border\": \"none\",\n        \"panel_consistency\": \"very_high\"\n      },\n      \"render_style\": \"luxury_editorial_realism\",\n      \"sharpness\": \"editorial_crisp\",\n      \"grain\": \"subtle_film\",\n      \"dynamic_range\": \"soft_bright_natural\",\n      \"color_grade\": \"ivory_white_royal\"\n    },\n    \"subject\": {\n      \"identity\": \"one woman with highly consistent facial features across all four panels\",\n      \"hair\": \"sleek elegant updo with a refined tiara\",\n      \"outfit\": \"luxurious white embroidered ball gown with delicate floral and vine details, voluminous skirt, white opera gloves\",\n      \"beauty\": \"fresh regal makeup, luminous skin, soft defined eyes, elegant smile\"\n    },\n    \"scene\": {\n      \"environment\": \"bright white or pale ivory editorial background, minimal and clean\",\n      \"mood\": \"romantic, royal, joyful, graceful, refined\"\n    },\n    \"panel_direction\": {\n      \"panel_1\": \"joyful dance pose with both arms raised elegantly, open smile, gown moving beautifully\",\n      \"panel_2\": \"graceful seated or paused portrait in the gown, soft regal smile, calm elegant presence\",\n      \"panel_3\": \"leaning forward slightly with playful royal warmth, gloves visible, full skirt spread around her\",\n      \"panel_4\": \"refined dance-inspired pose with soft movement in the shoulders and gown, poised smile and princess energy\"\n    },\n    \"camera\": {\n      \"framing\": \"mixed three-quarter and full gown portraits\",\n      \"angle\": \"clean editorial fashion angles\",\n      \"focus\": \"sharp on face, tiara, embroidery, glove details, and \"\n    }\n  }\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774508270117_g7n36q_HESb6uQa8AAxalG.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 25,
    "title": "Social Media Post - 2026 Fashion Paper Doll Editorial Board",
    "description": "A highly structured prompt designed for Nano Banana Pro to generate a photorealistic fashion paper-doll style editorial board. It specifies the layout, subject (adult woman in minimal shorts/top), 202...",
    "prompt": "{\n  \"generation_request\": {\n    \"meta_data\": {\n      \"tool\": \"NanoBanana Pro\",\n      \"task_type\": \"fashion_paper_doll_editorial_board\",\n      \"language\": \"en\",\n      \"priority\": \"highest\",\n      \"version\": \"v1.1_2026_PAPER_DOLL_SHORTS_MINIMAL_TEXT\"\n    },\n    \"input\": {\n      \"mode\": \"text_to_image\",\n      \"notes\": \"Create a photoreal fashion paper-doll style editorial board inspired by vintage magazine styling pages, but updated for 2026 fashion. In the center, show one adult woman standing in a clean paper-doll presentation pose with arms slightly open, wearing a simple neutral bandeau or fitted top and shorts underneath instead of underwear. The shorts should be minimal, modern, and clean, like styling-base shorts. Around her, arrange multiple stylish 2026-ready outfit options as separate wearable looks or paper-doll clothing pieces. The overall board should feel chic, editorial, playful, and fashion-forward, with updated silhouettes, modern colors, and trend-aware styling. Use fewer words than the vintage reference: only a refined title, a small model name area, and very minimal small fashion labels if needed. Do not clutter the page with heavy text. The fashion selection should reflect a 2026-inspired wardrobe direction with elevated modern pieces, cleaner styling, and more current color palettes.\"\n    },\n    \"output_settings\": {\n      \"aspect_ratio\": \"4:5\",\n      \"orientation\": \"portrait\",\n      \"resolution_target\": \"ultra_high_res\",\n      \"num_images\": 1,\n      \"render_style\": \"editorial_magazine_realism\",\n      \"sharpness\": \"editorial_crisp\",\n      \"grain\": \"subtle_vintage_print\",\n      \"dynamic_range\": \"soft_print_natural\",\n      \"color_grade\": \"2026_fashion_neutrals_with_trend_accents\"\n    },\n    \"subject\": {\n      \"main_model\": {\n        \"gender\": \"adult woman\",\n        \"base_look\": \"simple fitted neutral bandeau or crop top with shorts underneath, clean styling base for a paper-doll fashion board\",\n        \"pose\": \"standing straight with arms slightly open in a paper-doll presentation pose\",\n        \"beauty\": \"fresh editorial beauty, polished but natural, modern fashion-catalog finish\"\n      },\n      \"wardrobe_options\": [\n        \"2026-inspired tailored mini dress\",\n        \"soft structured co-ord set\",\n        \"elevated slip dress\",\n        \"modern fitted vest and skirt or shorts set\",\n        \"sleek day-to-night dress\",\n        \"trend-aware jacket and short set\"\n      ]\n    },\n    \"scene\": {\n      \"environment\": \"clean editorial magazine page with vintage paper-doll layout\",\n      \"mood\": \"playful, stylish, modern, feminine, editorial, collectible\",\n      \"text_amount\": \"very minimal, elegant, not cluttered\"\n    },\n    \"styling_direction\": {\n      \"fashion_year_feel\": \"2026-ready contemporary womenswear\",\n      \"color_palette\": [\n        \"butter yellow\",\n        \"powder blue\",\n        \"soft pistachio\",\n        \"warm mocha\",\n        \"dusty rose\",\n        \"creamy ivory\",\n        \"muted silver\",\n     \"\n    }\n  }\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774508267097_u3wpxp_HESbZx_aUAABej2.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 26,
    "title": "Social Media Post - High-Fashion Editorial Portrait in Industrial Studio",
    "description": "A structured prompt for Nano Banana Pro to generate an ultra-photorealistic, high-fashion editorial image of a subject in a high kick pose, wearing a black lace corset and mini tulle skirt in a cold, ...",
    "prompt": "{\n  \"meta\": {\n    \"camera\": \"iPhone 17 Pro\",\n    \"lens\": \"48mm\",\n    \"aspect_ratio\": \"2:3\",\n    \"quality\": \"ultra photorealistic\",\n    \"style\": \"clean editorial iPhone realism, sharp but natural\"\n  },\n  \"scene\": {\n    \"location\": \"industrial concrete studio\",\n    \"time\": \"studio controlled\",\n    \"atmosphere\": \"minimal, cold, high-fashion energy\"\n  },\n  \"lighting\": {\n    \"type\": \"top spotlight\",\n    \"temperature\": \"neutral (5000K)\",\n    \"effect\": [\n      \"defined shadows under legs\",\n      \"highlight on cheekbones\",\n      \"clean contrast\"\n    ]\n  },\n  \"subject\": {\n    \"pose\": {\n      \"position\": \"standing high kick pose\",\n      \"balance\": \"one leg vertical extension\",\n      \"arms\": \"behind back\"\n    },\n    \"expression\": {\n      \"eyes\": \"hidden behind bangs/glasses\",\n      \"energy\": \"cold, unapproachable dominance\"\n    },\n    \"hair\": {\n      \"style\": \"precise platinum bob with heavy bangs\"\n    },\n    \"outfit\": {\n      \"top\": {\n        \"type\": \"black lace corset\",\n        \"fit\": \"tight structured\"\n      },\n      \"bottom\": {\n        \"type\": \"mini tulle skirt\"\n      },\n      \"heels\": {\n        \"type\": \"platform stilettos with floral accents\"\n      }\n    }\n  },\n  \"camera\": {\n    \"angle\": \"low angle\",\n    \"distance\": \"full body\",\n    \"focus\": \"sharp\"\n  }\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774508271704_jwfqnf_HDnRunubEAAbZK0.jpg"
    ],
    "tags": [
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 27,
    "title": "Social Media Post - Split-View Mixed-Media Portrait (Photo and Illustration)",
    "description": "A prompt for Gemini Nano Banana Pro 2.0 to create a mixed-media portrait in a split-view vertical format. It combines a photorealistic image of a person (based on an uploaded photo) on the left with a...",
    "prompt": "A split-view vertical portrait combining a realistic photograph of a person [ use the uploaded photo as reference] on the left with a hand-drawn illustration of the same person on the right, both set against a lined paper background decorated with doodles. The image features a creative artistic style contrasting photography with line art.\nThe background includes doodles such as hearts, a paper airplane, and a smiley face. Highly detailed, 8k, vertical portrait.",
    "images": [
      "https://cms-assets.youmind.com/media/1774508265972_amayhp_HER03XvWsAA99by.jpg",
      "https://cms-assets.youmind.com/media/1774508265956_rn4h0d_HER03XkXcAAvGKj.jpg"
    ],
    "tags": [
      "portrait",
      "photography"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 29,
    "title": "Social Media Post - High-Fashion Latex Bodysuit Portraits with Luxury Cars",
    "description": "A complex, multi-part JSON prompt for Nano Banana Pro designed to generate three distinct, high-fashion, photorealistic portraits of women (inspired by Lisa, Jisoo, and Rosé) in futuristic latex bodys...",
    "prompt": "{\n\"prompt\": [\n{\n\"subject\": {\n\"type\": \"young woman\",\n\"identity\": \"Lisa inspired\",\n\"build\": \"slim, athletic\",\n\"pose\": \"crouching dynamically near the front wheel, one hand resting on the edge of the tire, intense direct gaze into camera\"\n},\n\"hair\": {\n\"color\": \"black, Use uploaded reference image, keep exact natural hair color unchanged\",\n\"length\": \"short\",\n\"texture\": \"straight, sleek with blunt full bangs matching reference image exactly\",\n\"accessories\": \"none\"\n},\n\"face\": {\n\"features\": \"Use uploaded reference image, keep identity exact — large striking eyes, sharp jawline, confident edgy aura, preserve exact facial structure, proportions, and skin texture without alteration\",\n\"jewelry\": \"none\"\n},\n\"outfit\": {\n\"type\": \"futuristic latex bodysuit\",\n\"color\": \"electric blue\",\n\"material\": \"high-gloss latex, reflective, skin-tight fit\"\n},\n\"setting\": {\n\"type\": \"industrial warehouse garage\",\n\"background\": {\n\"vehicle\": \"bright yellow McLaren 720S front wheel close-up\",\n\"wall\": \"large intricate golden dragon mural\"\n},\n\"lighting\": \"strong cinematic sunlight streaming from the right, high contrast highlights and shadows\",\n\"time_of_day\": \"daylight\"\n},\n\"photography\": {\n\"style\": \"photorealistic 8k\",\n\"aspect_ratio\": \"9:16\",\n\"focus\": \"sharp subject focus, detailed reflections on latex and car surface\",\n\"mood\": \"bold, edgy, high-fashion performance aesthetic\"\n},\n\"negative_prompt\": \"blurry, low detail, distorted anatomy, unnatural skin, watermark, text, logo, dull lighting\"\n},\n{\n\"subject\": {\n\"type\": \"young woman\",\n\"identity\": \"Jisoo inspired\",\n\"build\": \"slim\",\n\"pose\": \"sitting gracefully on car hood, legs crossed, direct poised gaze into camera\"\n},\n\"hair\": {\n\"color\": \"black, Use uploaded reference image, keep exact natural hair color unchanged\",\n\"length\": \"long\",\n\"texture\": \"smooth, flowing, matching reference image exactly\",\n\"accessories\": \"none\"\n},\n\"face\": {\n\"features\": \"Use uploaded reference image, keep identity exact — elegant symmetrical features, expressive eyes, fair skin, preserve exact facial structure and proportions without alteration\",\n\"jewelry\": \"none\"\n},\n\"outfit\": {\n\"type\": \"latex bodysuit\",\n\"color\": \"ruby red\",\n\"material\": \"glossy latex, form-fitting, reflective\"\n},\n\"setting\": {\n\"type\": \"industrial warehouse garage\",\n\"background\": {\n\"vehicle\": \"sleek black Ferrari hood\",\n\"wall\": \"large intricate golden dragon mural\"\n},\n\"lighting\": \"cinematic sunlight from right, clean highlights and shadow depth\",\n\"time_of_day\": \"daylight\"\n},\n\"photography\": {\n\"style\": \"photorealistic 8k\",\n\"aspect_ratio\": \"9:16\",\n\"focus\": \"sharp focus on subject with reflective surfaces emphasized\",\n\"mood\": \"elegant, powerful, high-fashion luxury aesthetic\"\n},\n\"negative_prompt\": \"blurry, low detail, distorted anatomy, unnatural skin, watermark, text, logo, cluttered background\"\n},\n{\n\"subject\": {\n\"type\": \"young woman\",\n\"identity\": \"Rosé inspired\",\n\"build\": \"slim\",\n\"pose\": \"standing beside front bumper, one hand resting on headlight, soft over-shoulde",
    "images": [
      "https://cms-assets.youmind.com/media/1774508264602_otg4uz_HERrqwga4AA41Xx.jpg"
    ],
    "tags": [
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 30,
    "title": "Social Media Post - Detailed Portrait Structure Prompt for Nano Banana Pro",
    "description": "A highly structured JSON prompt for Nano Banana Pro, detailing every aspect of a portrait image, including metadata, framing, visibility map, and subject analysis, focusing on a woman in fitness swimw...",
    "prompt": "This is a structured JSON metadata description of a portrait photograph rather than a traditional text prompt. The content describes a high-quality photograph of an adult woman (25-35 years old) in a fitness swimwear presentation. The subject is captured from a low angle in a full shot (visible from head to mid-thigh), shot on a medium distance with wide-angle lens and bokeh effect. Her face is shown in right profile with an oval shape, smooth forehead, pronounced brow bone, arched medium-thickness light brown brows, average-sized almond-shaped eyes with upward and right gaze, straight narrow nose with slightly upturned tip, bow-shaped lips with moderate upper lip and full lower lip in natural pink matte finish, defined cheekbones, sharp jawline, and tapered chin. Her hair is dirty blonde with warm undertones, long waist-length with loose beach waves, styled naturally down. She has tanned bronzed skin with golden undertones and visible musculature, satin-to-oily finish, with highlight zones on collarbone, shoulders, abdominal definition, and thighs. She is wearing a muted pink rose bikini top (triangle style with cowrie shell fringe) and matching thong-style bikini bottom with side ties and cowrie shell details. The pose is standing relaxed asymmetrical, facing three-quarters right, with neutral contemplative expression. Both hands are visible - right hand by side, left hand resting on outer thigh, with medium-short square-oval nails in opaque light blue or white polish.",
    "images": [
      "https://cms-assets.youmind.com/media/1774508278237_u5dtz3_HERjdPBXwAApCPj.jpg"
    ],
    "tags": [
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 31,
    "title": "Social Media Post - Photorealistic Portrait of a Blonde Girl in Electric Pink Latex",
    "description": "A detailed, structured prompt for Nano Banana Pro to generate a photorealistic, low-angle, full-body portrait of a blonde woman resembling Ana de Armas or Jennifer Lawrence, wearing electric pink late...",
    "prompt": "{\n  \"subject\": {\n    \"identity\": {\n      \"biometric_reference\": \"{argument name=\"biometric reference\" default=\"blonde girl\"}\",\n      \"facial_anatomy\": {\n        \"description\": \"heart-shaped face, defined cheekbones, vibrant blue-green irises with dark limbal ring, intricate stroma, wet clumped lashes\",\n        \"skin\": \"fair #F7DDCF with natural pores, fine freckles, realistic micro-texture, no smoothing\"\n      },\n      \"hair\": {\n        \"color\": \"vibrant blonde\",\n        \"state\": \"natural volume with organic strands over shoulders\"\n      },\n      \"body\": {\n        \"morphology\": \"slender athletic hourglass, WHR 0.72, defined clavicles, natural bust weight\"\n      }\n    }\n  },\n  \"wardrobe\": {\n    \"upper_body\": \"electric pink short-sleeve crop latex shirt, extreme deep V-neck, skin-tight\",\n    \"lower_body\": \"matching electric pink pleated latex mini-skirt with sharp structural pleats\",\n    \"hosiery\": \"black medium-mesh fishnet stockings from waist to bare toes with yellow nails feet\"\n  },\n  \"pose_action\": {\n    \"description\": \"powerful low-angle full-body shot, she squats low in a strong, balanced pose with knees comfortably apart.\",\n    \"fidelity\": \"exact anatomical match to reference posture\"\n  },\n  \"scene\": {\n    \"environment\": \"90-degree corner with glossy neon green ceramic tiles on walls\",\n    \"wall_art\": \"grunge black marker graffiti '{argument name=\"graffiti text\" default=\"Keor\"}' integrated into tiles\",\n    \"props\": \"large red faux-fur plush rabbit leaning against corner\"\n  },\n  \"lighting\": {\n    \"setup\": \"cinematic three-point: cool-white 6000K key from low front, purple rim light\",\n    \"specular\": \"sharp reflections on black nails, irises, and glossy tiles\"\n  },\n  \"camera\": {\n    \"aspect_ratio\": \"9:16\",\n    \"lens\": \"24mm wide-angle f/2.8, low worm's-eye view\",\n    \"format\": \"8k RAW photorealistic, ultra-detailed textures\"\n  },\n  \"negative_constraints\": {\n    \"forbidden\": [\n      \"footwear/shoes/socks\",\n      \"extra toes/fused phalanges/extra limbs\",\n      \"logos/text except '{argument name=\"graffiti text\" default=\"Keor\"}'\",\n      \"watermarks\",\n      \"artificial skin smoothing\",\n      \"reflection artifacts\"\n    ]\n  }\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774508271120_dstfw2_HERajfobYAUVB6C.jpg",
      "https://cms-assets.youmind.com/media/1774508271071_nt7b1n_HERajcnbYAYha25.jpg",
      "https://cms-assets.youmind.com/media/1774508271135_8x53h8_HERajlVWUAAHzD2.jpg",
      "https://cms-assets.youmind.com/media/1774508271904_5cdw7w_HERajsbWoAAKsGa.jpg"
    ],
    "tags": [
      "portrait",
      "photography"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 32,
    "title": "Social Media Post - Cinematic Silhouette with Bright Doorway",
    "description": "A prompt for generating a highly cinematic, Hollywood-style photo of a person silhouetted against an intensely bright white doorway. It emphasizes dramatic lighting, volumetric light rays, deep shadow...",
    "prompt": "Create a highly cinematic, Hollywood-style photo of a person using the face from the uploaded image. The person is standing in a dark room, facing slightly toward the camera, while a large open doorway behind them emits an intense bright white light. The light is so strong that it creates a powerful silhouette effect around the person, with glowing edges outlining their body. Soft fog or smoke fills the air, making the light rays visible and dramatic. The contrast between the dark room and the bright doorway is strong and cinematic. The person is wearing a stylish outfit such as a long coat, fitted clothes, and boots. Their posture is calm, confident, and slightly mysterious. Ultra realistic photography, dramatic lighting, volumetric light rays, deep shadows, atmospheric depth, Hollywood movie scene composition, 8k detail.",
    "images": [
      "https://cms-assets.youmind.com/media/1774508267323_9iwmma_HERYfCZbwAAFTlo.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 33,
    "title": "Social Media Post - Coquette Fashion Editorial Portrait (Sadie Sink)",
    "description": "A structured JSON prompt for Gemini Nano Banana Pro to generate a dramatic, high-contrast editorial portrait of a woman resembling Sadie Sink in 'Coquette fashion.' It details the attire (black corset...",
    "prompt": "{\n  \"image_generation_prompt\": {\n    \"subject\": {\n      \"description\": \"Young woman with a strong resemblance to {argument name=\"celebrity name\" default=\"Sadie Sink\"}.\",\n      \"hair\": \"Messy updo with loose curled tendrils framing the face.\",\n      \"face\": \"Glossy lips, dramatic winged eyeliner, smooth skin.\",\n      \"body\": \"Slender physique, smooth skin.\"\n    },\n    \"attire\": {\n      \"clothing\": \"Black corset top with white lace. White puffed mini skirt with black bows. White thigh-highs. Sheer black gloves.\",\n      \"style\": \"Coquette fashion, editorial glamour.\"\n    },\n    \"styling_and_accessories\": {\n      \"jewelry\": [\n        \"Pearl necklace with heart pendant\",\n        \"White flower brooch\",\n        \"Small black quilted belt bag on chain\"\n      ]\n    },\n    \"environment\": {\n      \"setting\": \"Photography studio.\",\n      \"background\": \"Plain grey wall with a circular spotlight.\",\n      \"water\": \"None.\"\n    },\n    \"pose\": {\n      \"posture\": \"Standing, hips angled.\",\n      \"arms\": \"One hand near neck, other on hip.\",\n      \"angle\": \"Eye-level shot.\"\n    },\n    \"lighting_and_mood\": {\n      \"lighting\": \"High-contrast studio spotlight.\",\n      \"mood\": \"Dramatic, editorial.\",\n      \"colors\": \"Black, white, neutral grey.\"\n    },\n    \"camera_and_technical\": {\n      \"style\": \"High-end fashion photography.\",\n      \"lens\": \"50mm\",\n      \"aperture\": \"f/5.6\",\n      \"quality_tags\": [\n        \"8k resolution\",\n        \"sharp focus\",\n        \"studio lighting\",\n        \"highly detailed\"\n      ]\n    }\n  }\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774508265809_xjbxtg_HERWZc1bYAMQfQP.jpg",
      "https://cms-assets.youmind.com/media/1774508265822_bgbffs_HERWZjBaQAENndq.jpg"
    ],
    "tags": [
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 34,
    "title": "Social Media Post - Kylie Jenner High-Fashion Street Editorial Portrait",
    "description": "A detailed JSON prompt for Nano Banana Pro to generate an ultra-photorealistic, high-fashion street editorial image of Kylie Jenner. It specifies the scene (luxury boutique window with reflections), o...",
    "prompt": "{\n  “meta”: {\n    “quality”: “ultra_photorealistic, raw style, 8k, highly detailed”,\n    “camera”: “iPhone 15 Pro Max, 35mm lens”,\n    “lighting”: “natural daylight with realistic glass reflections, soft outdoor shadows”,\n    “style”: “high-fashion street editorial, paparazzi style”,\n    “aspect_ratio”: “9:16”\n  },\n  “scene”: {\n    “location”: “A luxury boutique window on a sunny high-end shopping street. The vitrine features intricate glass bell jars with miniature fashion displays, including a Dior mannequin and a Chanel logo. Palm trees and blue sky are reflected in the large glass panes.”,\n    “atmosphere”: “Sophisticated, modern, glamorous, Beverly Hills vibe.”\n  },\n  “subject”: {\n    “gender”: “female”,\n    “name”: “{argument name=\"celebrity name\" default=\"Kylie Jenner\"}”,\n    “body”: {\n      “type”: “Realistic, slim, athletic and naturally proportioned figure.”\n    },\n“face”: {\n      “features”: “Distinctive Kylie Jenner facial features, sleek long raven-black hair styled in soft waves. She has turned her head away from the window to look directly into the camera lens.”,\n      “expression”: “Confident, playful, and alluring gaze, looking straight at the viewer.”\n    },\n    “outfit”: {\n      “description”: “White tight-fitting long-sleeved crewneck top, cream-colored high-waisted pleated mini skirt. She is wearing white pointed-toe mule heels with signature red soles. A beige quilted leather handbag with a gold chain strap is worn crossbody.”,\n      “fit”: “Snug, tailored, and trendy.”,\n      “accessory”: “She is holding a clear plastic cup with a green iced matcha drink and a straw in her left hand.”\n    },\n“pose”: “Standing on the sidewalk, body angled towards the shop window but her head is completely turned over her shoulder to face the camera. One leg is slightly stepped forward, maintaining the elegant silhouette from the original photo.”\n  },\n  “composition”: “Full-body shot from a slightly low angle. Sharp focus on Kylie and her outfit. The boutique window with its complex reflections and miniature displays serves as a rich, detailed background.”\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774508264537_nluhgz_HERS5JcX0AAUAeP.jpg",
      "https://cms-assets.youmind.com/media/1774508264539_xe5tng_HERS5HWbYAQZJZh.jpg",
      "https://cms-assets.youmind.com/media/1774508264606_4rt9xp_HERS5J5bEAAk7qi.jpg",
      "https://cms-assets.youmind.com/media/1774508265312_ccis0q_HERS5NbXwAAaE4P.jpg"
    ],
    "tags": [
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 35,
    "title": "Infographic / Edu Visual - PCB Word Art Schematic for 'Tesla'",
    "description": "A technical prompt for Nano Banana Pro using weighted terms (::) to generate a 2D schematic illustration of the word 'Tesla' constructed entirely from printed circuit board (PCB) traces. It specifies ...",
    "prompt": "Anchor: The word \"{argument name=\"word to construct\" default=\"Tesla\"}\" :: constructed entirely from printed circuit board traces, where each letterform is a functional-looking PCB layout — solder pads as terminals, vias as joints, trace paths forming the strokes ::4 Morphology: Technical PCB illustration. Letter strokes are traces of varying widths. Circular vias punctuate stroke junctions. Solder pad rectangles anchor stroke terminals. The letters read as living circuit diagrams. Monochrome technical vector ::3 Material Physics: Jet black trace lines on white substrate, exposed copper-pad circles with concentric detail rings, uniform stroke weight with deliberate corner chamfers (45°) ::3 Illumination: Flat technical illustration lighting, no depth, pure 2D schematic clarity ::2 Render Stack: Electronics schematic aesthetic, hardware documentation style, Gerber file visual output ::1 Negative: [Silhouette shapes, actual electronic components, chip illustrations, realistic PCB green color, perspective, photographic textures, solder reflections] ::-1",
    "images": [
      "https://cms-assets.youmind.com/media/1774508262762_4ktyii_HEFZC2sXUAAg6AE.jpg",
      "https://cms-assets.youmind.com/media/1774508262843_2dluf1_HEFZC4NbAAAu4kU.jpg"
    ],
    "tags": [
      "infographic"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 36,
    "title": "Infographic / Edu Visual - Complex Machine Deconstruction Blueprint Prompt",
    "description": "A complex, multi-stage Nano Banana prompt designed to generate a 'Kinetic Blueprint' photograph of a complex machine (like a Space Shuttle) being deconstructed into three assembly phases, displayed wi...",
    "prompt": "<instruction>\n \nInput A is a Complex Machine (e.g., {argument name=\"machine type\" default=\"A Space Shuttle\"}, A Grand Piano, A Clockwork Watch).\nDeconstruct into   3 Assembly Phases  :\n   Phase 1:  Raw chassis/frame.\n   Phase 2:  Internal gears/wires.\n   Phase 3:  Finished exterior.\n2. Container (The Geometric Unfold):\nGoal: \"Kinetic Blueprint\" Photography.\nThe Object: A series of Triangular Acrylic Wedges attached to a central hinge, opening like a blooming flower or a tool-kit.\nThe Layout: The wedges are partially unfolded across a drafting table surface.\n3. The Dioramas (The Exploded View):\nInternal Content: Each wedge holds a different \"Phase\" of the machine.\nVisual Link: Real copper wires or brass chains physically cross the gaps between the acrylic wedges, \"connecting\" the assembly line.\n4. Visual \nBackground: A cluttered workshop desk with blueprints and calipers.\nLighting: Hard side-lighting to cast shadows of the internal gears through the clear acrylic walls onto the table.\nOutput: ONE image, 16:9 Aspect Ratio, 3D Macro Render, \"Technical Art\" aesthetic.\n</instruction>",
    "images": [
      "https://cms-assets.youmind.com/media/1774421471177_gjb6i4_HECr6nuXwAADiZP.jpg",
      "https://cms-assets.youmind.com/media/1774421471558_ss79wf_HECrRc7bgAAd4NX.jpg"
    ],
    "tags": [
      "infographic"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 37,
    "title": "Infographic / Edu Visual - Futuristic Holographic Burj Khalifa Blueprint",
    "description": "A detailed prompt for generating a futuristic, cinematic image of the Burj Khalifa architectural blueprint projected as a glowing, actively constructing hologram above a high-tech glass table. The pro...",
    "prompt": "CONCEPT:\nA futuristic architectural blueprint of the Burj Khalifa projected as a glowing hologram, actively constructing itself in mid-air through robotic precision and digital intelligence.\n\nSUBJECT:\nA semi-transparent holographic version of the Burj Khalifa floating above a sleek glass smart table. The lower portion appears as a glowing blue wireframe blueprint, while the upper portion transitions into a fully photorealistic skyscraper with reflective glass panels and metallic structure as it builds itself in real-time.\n\nENVIRONMENT:\nA high-tech architectural lab with a dark, minimal interior. The blueprint originates from a glossy black glass table embedded with touch controls, glowing UI panels, and soft neon edges. Subtle reflections of the hologram appear on the table surface. Background is clean, futuristic, and slightly blurred.\n\nSTRUCTURAL DETAILS:\nThe central spire rises as glowing gridlines before solidifying into steel and glass  \nTiered setbacks of the tower assemble through hovering robotic drones  \nGlass facade panels lock into place with precise alignment and reflections  \nLaser beams scan and map each level during construction  \nSmall AI drones orbit around the structure, actively building and welding components  \nMaterials transition from holographic light into real textures — polished glass, steel beams, and concrete core  \nFloating UI overlays show measurements, grids, and rotating architectural schematics\n\nVISUAL MECHANIC:\nThe blueprint exists in layered form — base is a glowing grid, mid-layer is a semi-transparent wireframe, and top layer is fully realistic. Certain sections flicker between hologram and solid material, emphasizing the transformation.\n\nLIGHTING:\nDark environment with strong neon blue and cyan holographic glow. Subtle rim lighting created by reflections from the hologram. Volumetric light beams and soft particles enhance depth.\n\nCAMERA & LENS:\nShot on a full-frame camera, 35mm lens. Slight low-angle perspective to emphasize scale and height. Sharp focus on the hologram core with slight background blur.\n\nCOMPOSITION:\nVertical 2:3 format. The Burj Khalifa hologram is centered, rising upward. UI elements orbit symmetrically around it. Clean negative space enhances the futuristic aesthetic.\n\nSTYLE & MOOD:\nFuturistic, cinematic, high-tech, and minimal. Feels like advanced AI-driven architecture and innovation. Clean, premium, and visually striking.\n\nDETAILS:\nUltra-sharp holographic lines, glowing particles, realistic glass reflections, smooth transitions between digital and physical materials, micro UI details, 8K resolution, HDR, cinematic color grading with blue/cyan tones and deep contrast.\n\nNEGATIVE PROMPT:\ncluttered environment, low detail, dull lighting, messy UI, cartoon style, distorted structure, blurry hologram, watermark",
    "images": [
      "https://cms-assets.youmind.com/media/1774421477128_lcgq2f_HEMIVaQa0AAqry1.jpg",
      "https://cms-assets.youmind.com/media/1774421477343_u93biq_HEMIVZgbEAAdKD0.jpg"
    ],
    "tags": [
      "infographic"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 38,
    "title": "Infographic / Edu Visual - The Naturalist Dissection Prompt",
    "description": "A detailed Nano Banana 2 prompt for generating an image of a natural object (like a flower or insect) dissected and pinned open like a specimen, rendered with the lighting style of Caravaggio and the ...",
    "prompt": "[NATURAL OBJECT] dissected as if by a master naturalist who found it in the wild. Split and pinned open like a specimen, but lit as if Caravaggio worked for National Geographic.\nEvery internal structure glowing with its own material truth. Cross-section so sharp it feels violent. Interior so beautiful it feels sacred. The full object present, one half intact, one half opened to its core, every layer at the resolution of obsession.\nBackground: pure black velvet. The object floats in it like something precious and dangerous.\nLabels pressed close, handwritten-weight serif, never floating: \"[STRUCTURE]\" / \"[MATERIAL TRUTH]\" / \"[AGE OR SCALE]\"\n\"{argument name=\"object\" default=\"[OBJECT]\"} DISSECTED\" title in warm ivory caps, upper left. \"{argument name=\"line\" default=\"[One line that makes you lean closer]\"}\" italic beneath.\nMood: Audubon illustration meets Caravaggio meets the most beautiful science photograph ever taken. 4K, specimen lighting, extraordinary interior detail, nothing clinical, everything alive.",
    "images": [
      "https://cms-assets.youmind.com/media/1774421474007_wzpn9i_HEL6SLdaIAkznX8.jpg",
      "https://cms-assets.youmind.com/media/1774421474014_cf4yi1_HEL6KzTXAAAfEbE.jpg",
      "https://cms-assets.youmind.com/media/1774421474033_s5hn4u_HEL6Z0ZaIAINvyW.jpg",
      "https://cms-assets.youmind.com/media/1774421474599_wan05c_HEL6imnWoAA_yAJ.jpg"
    ],
    "tags": [
      "infographic"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 39,
    "title": "Infographic / Edu Visual - Template for generating a fictional textbook page",
    "description": "A reusable template prompt for Nano Banana 2 designed to generate a page from a fictional textbook. The user can customize the world setting and subject, ensuring the content is accurate Japanese, avo...",
    "prompt": "Create a page from a textbook on \"{argument name=\"subject\" default=\"Biology\"}\" used in a school in a \"{argument name=\"worldview\" default=\"Fantasy World\"}\".\nThe content of the textbook must not be based on the real world, but must strictly adhere to the specified worldview. The content should be written in accurate Japanese, avoiding duplication of content and font corruption. The composition is a realistic photo of an open textbook taken directly from above, not an illustration.",
    "images": [
      "https://cms-assets.youmind.com/media/1774421491601_6c2ara_HEKC5FTaIAYuBxE.jpg",
      "https://cms-assets.youmind.com/media/1774421491654_nev5r1_HEKC5FEaIAMZ-5G.jpg",
      "https://cms-assets.youmind.com/media/1774421491550_xqhs11_HEKC5FEaIAIVX3J.jpg",
      "https://cms-assets.youmind.com/media/1774421492702_ghqkrd_HEKDFaLasAAFH6d.jpg"
    ],
    "tags": [
      "infographic"
    ],
    "language": "JA",
    "featured": false,
    "raycast": true
  },
  {
    "id": 40,
    "title": "Infographic / Edu Visual - Object Reasoning Test Prompt for Nano Banana 2",
    "description": "A detailed prompt designed to test the object reasoning and spatial awareness capabilities of image generation models, comparing Nano Banana 2 and Uni-1. The prompt requires specific placement of obje...",
    "prompt": "A photorealistic studio shot. On a wooden table sits a solid red cube. Resting exactly on top of the red cube is a glowing yellow sphere. Directly to the left of the red cube is a green ceramic coffee mug. Directly behind the red cube is a tall, ornate silver candlestick. Behind all of these objects is a large, clear mirror reflecting the scene. In the mirror's reflection, the red cube, the yellow sphere, and the silver candlestick are perfectly reflected, but the green ceramic coffee mug is completely absent from the reflection. The space where the green mug should be in the mirror shows only the empty wooden table.",
    "images": [
      "https://cms-assets.youmind.com/media/1774334459639_j9sygd_HEHGxg8aIAUSTJf.jpg",
      "https://cms-assets.youmind.com/media/1774334459801_swdutp_HEHGybXaIAAjK_D.jpg"
    ],
    "tags": [
      "infographic"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 41,
    "title": "Infographic / Edu Visual - Four-Panel Manga: The Legend of the 5000 Yen Cost",
    "description": "This is the title and key phrases used to generate a four-panel manga image using Nano Banana Pro, focusing on the theme of 'The Legend of the 5000 Yen Cost' and the high-profit margin of a 500,000 ye...",
    "prompt": "Title\nThe Legend of the 5000 Yen Cost\n\nThe cost of a 500,000 yen champagne tower is\n5,000 yen?\n\nProfit margin over 90%\n\nWhat is this?",
    "images": [
      "https://cms-assets.youmind.com/media/1774334473204_p1uqiz_HEEE3Dpa0AAZvbY.jpg",
      "https://cms-assets.youmind.com/media/1774334474304_9halhc_HEEE3DDaQAAou3X.jpg"
    ],
    "tags": [
      "anime",
      "infographic"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 42,
    "title": "Infographic / Edu Visual - 3x3 Grid Prompt for Lighting Cheatsheet",
    "description": "A complex prompt for Nano Banana Pro designed to generate a 3x3 grid image containing nine identical portraits of a subject, with each panel demonstrating a different, specifically named lighting tech...",
    "prompt": "A 3x3 photo grid presented as a single image on a dark grey background. Each of the nine grid cells contains a different portrait of the same subject from the uploaded image, maintaining the perfect character consistency, outfit and pose across all panels. Below each individual portrait, a clean sans-serif text label with a number and name is clearly displayed.\n\nThe grid layout and lighting setups are: \n\n- Top row, left to right:\n\nLoop Lighting (Flattering 3/4 light with a small loop of shadow from the nose onto the cheek)\n\nHardlight Frontal Flash (direct front facing, harsh flashlight with deep frontal shadows)\n\nSplit Lighting (dramatic light on only one side of the face, leaving the other side completely dark)\n\n- Middle row, left to right:\n\nButterfly Lighting  (classic symmetrical light from the front, slightly high, with a small shadow under the nose)\n\nGobo Pattern (Venetian Blind)' (light projected through Venetian blinds, creating linear shadows across the face and clothes, the shadow can also be scene on the background)\n\nUnder-Lighting (Uplight)' (light coming from below, creating reverse shadows and a moody look)\n\n- Bottom row, left to right:\n\nGolden Hour / Warm Light' (bathed in soft, golden, warm light from a side angle)\n\nDramatic Spotlight  (hard, narrow circular beam of light, with a deep chiascuro effect and crushed blacks)\n\nNeutral Kelvin Rim Light' (intense backlighting with no front fill, creating a distinct glowing outline around the hair and shoulders, leaving the face in darkness, against a black background).\n\nThe perspective and features remain identical in all panels, with only the specified lighting changing to match the label.",
    "images": [
      "https://cms-assets.youmind.com/media/1774248307158_jyis07_HECyRQkbwAAPNRV.jpg"
    ],
    "tags": [
      "infographic"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 43,
    "title": "Infographic / Edu Visual - Flat UI/Startup Style Illustration Prompt",
    "description": "A simple, reusable prompt for Nano Banana Pro to generate flat, startup-style vector illustrations of a specified subject, emphasizing bright colors, simple shapes, clean design, and a white backgroun...",
    "prompt": "Flat illustration of {argument name=\"subject\" default=\"[subject]\"}, startup-style vector art, bright colors, simple shapes, clean and professional design, white background, no text.",
    "images": [
      "https://cms-assets.youmind.com/media/1774248298494_hmspay_HEBU7CUakAAZ7B4.jpg",
      "https://cms-assets.youmind.com/media/1774248298703_c5u0he_HEBU8uRbQAAwH_m.jpg",
      "https://cms-assets.youmind.com/media/1774248299367_xkguo8_HEBVI3ybMAEeF1-.jpg",
      "https://cms-assets.youmind.com/media/1774248298515_yl0oah_HEBU9qbawAAkh8D.jpg"
    ],
    "tags": [
      "infographic"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 44,
    "title": "Infographic / Edu Visual - Watercolor Map Generation Prompt",
    "description": "A detailed prompt for Nano Banana 2 to create a watercolor-style map of a specified country, focusing on clean design, high legibility, and specific artistic constraints (no cities, roads, flags, logo...",
    "prompt": "A detailed watercolor-style map of {argument name=\"country name\" default=\"COUNTRY\"} on lightly textured paper, soft flowing washes in distinct harmonious colors for each first-level administrative division, all federal states, provinces or regions accurately separated by clear borders and labeled directly inside their areas in neat blue ballpoint-pen handwriting, educational and infographic-friendly, clean composition, high legibility, subtle paper grain, gentle shading, refined illustrative finish, balanced negative space, no cities, no roads, no flags, no logos, no watermark, bright clean background",
    "images": [
      "https://cms-assets.youmind.com/media/1774248304199_s1s09e_HEBK9gkWwAA5Ozo.jpg"
    ],
    "tags": [
      "infographic"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 45,
    "title": "Infographic / Edu Visual - Nano Banana Pro Science Prompt Template",
    "description": "A highly structured, multi-phase prompt designed for Nano Banana Pro to visualize complex scientific or mathematical theories. It instructs the model to decompose the theory into visual language, tran...",
    "prompt": "2x2 grid, do this for 4 famous PHD level science or math topics <instructions>\n Input Variable:  {argument name=\"theorem or formula\" default=\"Theorem / Formula\"}\nPhase 1: Schematic Decomposition\nAnalyze the Notation: Identify the primary visual language of the scientist (Chalk on blackboard? Ink on parchment? Pencil on graph paper?).\nIdentify the \"Structure\": If this theory were a building, what would it look like?\nLogic: Chaos Theory -> Fractal Spire. Thermodynamics -> Engine Block.\nPhase 2: The Dimensional Transition\nThe Base: A flat surface covered in the [Notation Medium] (e.g., a slate blackboard covered in chalk equations).\nThe Extrusion: The chalk lines physically lift off the surface. They begin as white wireframes, then gain opacity, then gain texture.\nThe Climax: At the top of the image, the wireframes have fully solidified into a photorealistic, impossible structure representing the theory.\nThe Observer: A tiny, scale-model figure of the scientist stands on the flat \"2D\" section, looking up in awe at the massive \"3D\" structure they have summoned.\nOutput: High-Angle Isometric, \"3D mod designer toy\" style, stark contrast between sketchy lines and solid mass.\n</instructions>",
    "images": [
      "https://cms-assets.youmind.com/media/1773989007026_3chcm0_HDkaXopXYAAoGe7.jpg",
      "https://cms-assets.youmind.com/media/1773989007020_f857ap_HDkaJXCXQAARXyk.jpg"
    ],
    "tags": [
      "infographic"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 46,
    "title": "Infographic / Edu Visual - Typographic Sculpture of Historical Inventions",
    "description": "A complex, structured prompt for Nano Banana to generate a 2x2 grid of 3D typographic sculptures representing four important years in history, where the numbers are formed by objects related to the in...",
    "prompt": "2x2 grid, do this for 4 important years in history and their most important inventions  {    Anchor:   `[Letter/Number] :: [Era/Theme (e.g., 1980s Retro Tech / Victorian Steampunk)]::4`\n    Morphology:   `3D Typographic sculpture of [Letter/Number], character shape defined by a dense pile of [Era/Theme] objects, chaotic but legible assemblage, graphic design asset::3`\n    Material Physics:   `Textures of [Era/Theme] objects (plastic, rust, wood), occlusion between stacked items, realistic scale of constituent parts forming the glyph::3`\n    Illumination:   `Three-point studio lighting, softbox overhead, clean background for isolation::2`\n    Render Stack:   `Cinema 4D render, isometric or front-facing, ambient occlusion, 8k, Adobe Substance material suite::1`\n    Negative:   `[Illegible, flat font, 2D, handwriting, paper, messy background, floating objects]:: -1`}",
    "images": [
      "https://cms-assets.youmind.com/media/1773988996010_w0nbve_HDkJT1MXoAAlP2x.jpg"
    ],
    "tags": [
      "infographic"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 47,
    "title": "Infographic / Edu Visual - Nano Banana 2 Note Illustration Prompt (Rothschild Historical Scene)",
    "description": "A comprehensive system prompt for Nano Banana 2, instructing it to act as a professional illustrator and prompt engineer to create a visually appealing, flat-design illustration for a blog post about ...",
    "prompt": "# Instructions\nYou are a professional illustrator and prompt engineer.\nRead the following [Blog Summary] and create an attractive illustration that intuitively conveys its content.\nDisplay the title at the top of the illustration.\n\n# Image Size\n1280px × 670px (Aspect ratio 16:9)\n\n# Output Conditions\nBrand Color: [#06c7b0]\nSimple and clean flat design.\nPlace figures and icons drawn with uniform black outlines, partially using pastel accent colors (sky blue, coral pink, etc.).\nEmphasize rounded shapes and a soft impression.\nDiagram-centric composition (e.g., Venn diagrams, bar graphs, speech bubbles) with a friendly tone suitable for materials viewed by students and young people, or for social media.\nDesign with ample white space, prioritizing visibility and balance.\nThe figures appearing should be dressed as 18th-century European nobility.\n\n# Blog Summary\nMayer Amschel Rothschild was not born into a privileged class, but a turning point arrived. He gained the opportunity to provide antique coins to Wilhelm IX, the Elector of Hesse, the regional ruler. However, that alone would make him just another antique coin dealer. What made him unusual was that he continued to provide rare antique coins to Wilhelm IX \"at prices significantly lower than the market rate, disregarding profit.\" Normally, one would try to overcharge a person in power. But he prioritized gaining favor over picking up immediate small change.",
    "images": [
      "https://cms-assets.youmind.com/media/1773902679745_hzj4wl_HDpzz5DboAAofOu.jpg"
    ],
    "tags": [
      "infographic"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 48,
    "title": "Infographic / Edu Visual - Modern Lifestyle Split Poster Prompt for Nano Banana Pro",
    "description": "A highly detailed structured JSON prompt for Nano Banana Pro designed to create a split composition poster. The top section features a luxurious smartphone gym selfie of a fit woman, and the bottom se...",
    "prompt": "{\n  \"Objective\": \"Create a modern lifestyle split composition poster combining a luxurious smartphone gym selfie with a healthy diet bowl and calorie infographic.\",\n  \"Composition\": {\n    \"layout\": \"vertical split\",\n    \"aspect_ratio\": \"3:4\",\n    \"top_section\": {\n      \"type\": \"smartphone selfie\",\n      \"scene\": \"luxurious modern gym interior\",\n      \"subject\": {\n        \"type\": \"fit athletic woman\",\n        \"pose\": \"mirror selfie holding a smartphone\",\n        \"outfit\": [\n          \"stylish sports bra\",\n          \"high-waisted athletic shorts or leggings\"\n        ],\n        \"appearance\": \"healthy toned physique, post-workout glow\"\n      },\n      \"environment_elements\": [\n        \"modern gym mirrors\",\n        \"minimalist gym equipment\",\n        \"soft natural window light\",\n        \"premium fitness studio interior\"\n      ],\n      \"photography_style\": {\n        \"camera\": \"smartphone\",\n        \"aesthetic\": \"casual candid social media selfie\",\n        \"lighting\": \"natural daylight mixed with indoor gym lighting\",\n        \"imperfections\": [\n          \"slight smartphone noise\",\n          \"natural reflections in mirror\",\n          \"subtle motion softness\"\n        ]\n      }\n    },\n    \"bottom_section\": {\n      \"type\": \"food photography with infographic\",\n      \"scene\": \"healthy breakfast bowl on wooden table\",\n      \"food_bowl\": {\n        \"ingredients\": [\n          \"strawberries\",\n          \"blueberries\",\n          \"banana slices\",\n          \"granola\",\n          \"yogurt base\"\n        ],\n        \"presentation\": \"clean top-down food photography\"\n      },\n      \"infographic\": {\n        \"position\": \"next to the bowl\",\n        \"style\": \"minimal clean nutrition infographic\",\n        \"elements\": [\n          {\n            \"label\": \"Banana\",\n            \"calories\": \"90 kcal\"\n          },\n          {\n            \"label\": \"Strawberries\",\n            \"calories\": \"50 kcal\"\n          },\n          {\n            \"label\": \"Blueberries\",\n            \"calories\": \"60 kcal\"\n          },\n          {\n            \"label\": \"Granola\",\n            \"calories\": \"180 kcal\"\n          },\n          {\n            \"label\": \"Yogurt\",\n            \"calories\": \"120 kcal\"\n          },\n          {\n            \"label\": \"Total\",\n            \"calories\": \"500 kcal\"\n          }\n        ]\n      },\n      \"photography_style\": {\n        \"camera_angle\": \"top-down flat lay\",\n        \"lighting\": \"soft natural kitchen light\",\n        \"style\": \"clean healthy food photography\"\n      }\n    }\n  },\n  \"Aesthetic\": {\n    \"theme\": \"modern fitness lifestyle\",\n    \"color_palette\": [\n      \"soft neutrals\",\n      \"natural wood tones\",\n      \"fresh fruit colors\",\n      \"clean white accents\"\n    ]\n  },\n  \"Rendering\": {\n    \"style_keywords\": [\n      \"fitness lifestyle collage\",\n      \"luxury gym selfie\",\n      \"healthy food photography\",\n      \"nutrition infographic\",\n      \"social media aesthetic\"\n    ],\n    \"realism\": \"photorealistic\",\n    \"detail_level\": \"high detail textures\",\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1773643982875_l50puq_HDeQc8lXoAAMA1N.jpg"
    ],
    "tags": [
      "infographic"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 49,
    "title": "Infographic / Edu Visual - Product Assembly Sequence Timeline",
    "description": "A complex, multi-stage prompt designed for Nano Banana 2 (used within Adobe Firefly) to generate a 5-panel horizontal timeline illustrating the assembly sequence of a product, focusing on dramatic lig...",
    "prompt": "5-stage horizontal manufacturing timeline, frozen mid-assembly. deep matte black background. dramatic industrial spotlights, deep shadow falloff.  \nS1: Components scattered, floating, zero assembly. \nS2: Converging with speed lines, skeleton emerging. \nS3: Half-built, peak tension, fasteners mid-tighten. \nS4: Chassis open, full internals exposed. \nS5: Finished product + ghost wireframe overlay.  \nSame 3/4 camera angle across all stages. Dotted trajectory arcs connect each component across stages. Each component color-coded consistently.  Title: \"PRODUCT NAME - ASSEMBLY SEQUENCE\" Footer: \"N parts parts · X hrs · KEY SPEC\"  Helvetica Neue Light labels. 4K, tack sharp. Dieter Rams precision.",
    "images": [
      "https://cms-assets.youmind.com/media/1773643976636_wiorx9_HDdwJpKXoAAU_He.jpg",
      "https://cms-assets.youmind.com/media/1773643976742_02299d_HDdv2qpWcAAjiia.jpg",
      "https://cms-assets.youmind.com/media/1773643976909_okb2bb_HDdwtrdWsAEaWaC.jpg",
      "https://cms-assets.youmind.com/media/1773643977504_81eh7o_HDdxC-xXUAA1QLl.jpg"
    ],
    "tags": [
      "infographic",
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 50,
    "title": "YouTube Thumbnail - Cinematic Hollywood-Style Street Market Walk",
    "description": "A prompt for generating a highly cinematic, Hollywood-style photo based on an uploaded image. The scene is a busy night street market with colorful lights and motion blur on surrounding people, emphas...",
    "prompt": "Create a highly cinematic, Hollywood-style photo of a person using the face from the uploaded image. The person is walking confidently through a busy street market at night filled with colorful lights, neon signs, and glowing stalls. The camera captures a mid-shot from slightly low angle, giving a powerful and dramatic feel. People around are moving in motion blur, creating a sense of energy and chaos, while the main person is sharp and in focus. Warm and cool lights mix together, reflecting on the ground and surroundings. Light smoke and atmosphere enhance the depth of the scene. The person is wearing stylish modern clothing like a jacket, t-shirt, jeans, and sneakers. Cinematic lighting, dramatic contrast, vibrant colors, shallow depth of field, ultra realistic, movie-scene composition, 8k, Hollywood film look.",
    "images": [
      "https://cms-assets.youmind.com/media/1774421477984_goxo7r_HEMUD0tbUAAlveq.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 51,
    "title": "YouTube Thumbnail - Cinematic photo of a woman on a subway platform with motion blur",
    "description": "A prompt for Nano Banana 2 (Gemini Nano Banana Pro) to create a realistic cinematic photograph of a woman on a subway platform. The prompt emphasizes motion blur of a passing train in the background, ...",
    "prompt": "Create a realistic cinematic photo of a woman using the face from the uploaded image. She is standing on a subway platform while a train passes behind her at high speed, creating motion blur. The woman is still and in sharp focus, looking slightly to the side with a calm and confident expression. She is holding a bouquet of flowers wrapped in paper in one hand. The outfit is stylish and modern - an oversized blazer, short skirt or shorts, and knee-high boots. The lighting is soft but cinematic, with natural indoor tones from the station lights. The background shows the moving train blurred with streaks of motion. The floor reflects a bit of light, adding depth. Cinematic photography, motion blur effect, atmospheric depth, realistic shadows, high detail, aesthetic composition.",
    "images": [
      "https://cms-assets.youmind.com/media/1774421480586_gzj5g8_HELMn15bgAAEhVt.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 52,
    "title": "YouTube Thumbnail - Cinematic frame of silver silence",
    "description": "A detailed, cinematic prompt for Nano Banana Pro describing a scene of 'silver silence' with high atmospheric depth. It emphasizes the contrast between vibrant orange hair and a muted silver grass fie...",
    "prompt": "Exploring atmospheric depth in Nano Banana Pro. The contrast between the vibrant orange hair and the muted silver grass field creates a hauntingly beautiful cinematic frame. 👘✨",
    "images": [
      "https://cms-assets.youmind.com/media/1774421491405_4ka6fn_HEJKP-SXoAAVgBy.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 53,
    "title": "YouTube Thumbnail - Nano Banana 2 Brushstroke Title Logo Prompts (4 Styles)",
    "description": "Four detailed prompts for generating different styles of brushstroke title logos using Nano Banana 2, including Battle Anime, Colorful Pop, Horror, and Cyberpunk styles. Users can replace the placehol...",
    "prompt": "1. Battle Anime Style:\n\"Title logo for the text '{argument name=\"Text\" default=\"TEXT\"}'.\nRough, powerful brushstrokes, ink splatters and bleeding, intense brush strokes.\nExplosive energy, flames, lightning, and speed lines in the background.\nImpactful, like the title of a shonen manga battle work.\nHigh contrast, glow effects, dramatic, dynamic composition, 4K.\nDo not include any background images, scenery, or decorative scenes.\nThe background must be a solid color (white or black) or transparent.\"\n\n2. Colorful Pop Style:\n\"Title logo for the text '{argument name=\"Text\" default=\"TEXT\"}'.\nBrushstroke font but pop and colorful, merging neon colors and gradients with the ink.\nCombine ink splashes with pop shapes (circles and stars).\nBright and impressive design, like an anime opening logo.\nVivid colors, clean and high resolution.\nDo not include any background images, scenery, or decorative scenes.\nThe background must be a solid color (white or black) or transparent.\"\n\n3. Horror Style:\n\"Title logo for the text '{argument name=\"Text\" default=\"TEXT\"}'.\n\nDistorted and unsettling brushstrokes, crumbling calligraphy, thin and elongated abnormal strokes.\nInk is not only black but also blood-like reddish-black ink that bleeds, dripping expressions, and viscous texture.\nStrong blurring and bleeding, irregular and unstable shapes.\n\nAbnormal expressions where parts of the text melt, bleed, or collapse.\nSlight blur or double image (ghosting) included.\n\nEffects:\n・Faintly and eerily glowing border (red or pale blue light)\n・Thin, fog-like smoke\n・Noise, glitch, grainy particles\n・Ink splatters like blood (subtle)\n\nOverall, emphasize quiet terror, anxiety, and a sense of unease.\nAtmosphere like a Japanese horror or psychological horror movie title.\n\nHigh contrast, dark tone, cinematic, ultra high definition, 4K, masterpiece, best quality, ultra detailed, typography, logo design\nDo not include any background images, scenery, or decorative scenes.\nThe background must be a solid color (white or black) or transparent.\"\n\n4. Cyberpunk Style:\n\"Title logo for the text '{argument name=\"Text\" default=\"TEXT\"}'.\n\nFuturistic and sophisticated cyberpunk style design.\nA hybrid typeface based on brushstrokes, where parts of the strokes are digitally transformed and reconstructed.\n\nMerge smooth, sharp lines with geometric, technological edges.\nInk expression is clean, with minimal bleeding or converted into a stylized form.\n\nColors are based on neon (cyan, magenta, purple, blue),\nComposed of glowing lines, borders, and gradients.\n\nEffects:\n・Glitch (light and stylish)\n・Hologram-like transparency\n・Light particles and digital noise\n・Scan lines, fine lines, and fragments in a UI style\n\nFuturistic presentation where parts of the text are pixelated, disassembled, and reconstructed.\n\nClean, sharp, high contrast, glowing, futuristic,\nUltra high definition, 4K, masterpiece, best quality, ultra detailed, typography, logo design\nDo not include any background images, scenery, or decorative scenes.\nThe background must be a solid color (white or black) or transparent.\"",
    "images": [
      "https://cms-assets.youmind.com/media/1774334476231_0emrm3_HEIE7_IaIAICL_T.jpg",
      "https://cms-assets.youmind.com/media/1774334476167_tco6jh_HEIE9rKaUAASqY-.jpg",
      "https://cms-assets.youmind.com/media/1774334476259_hlu641_HEIE-8ibcAAkz1Y.jpg",
      "https://cms-assets.youmind.com/media/1774334477003_kvkvud_HEIFAEqaIAAoKBA.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "JA",
    "featured": false,
    "raycast": true
  },
  {
    "id": 54,
    "title": "YouTube Thumbnail - Cinematic Night Taxi Portrait with Teal and Orange Grading",
    "description": "A detailed prompt for generating a cinematic portrait shot from outside a reflective car window at night. The subject is seated in the rear, looking directly at the camera, with rain and neon reflecti...",
    "prompt": "\"Image from subject, medium close-up, shot from outside through a reflective car window. The subject is ({argument name=\"subject position\" default=\"seated in the rear right passenger seat\"}), leaning back against the headrest, looking directly toward the camera through the glass. A hand is visible resting on the interior window frame. Wearing a light-colored crew-neck t-shirt and dark-tinted round sunglasses. The setting is a taxi interior at night. The background is a blurred urban landscape with bright bokeh from traffic and neon signs. Rain droplets and condensation are present on the glass surface. Cinematic teal-and-orange color palette. Vibrant red and green neon reflections are projected onto the subject and the window glass. High-contrast lighting with deep, crushed shadows and warm, hazy highlights. Dense 35mm film grain, heavy glass reflections, lens flares, and soft chromatic aberration at the edges. \"",
    "images": [
      "https://cms-assets.youmind.com/media/1774248313255_l6y14w_HEDWL3mXoAEbP_F.jpg",
      "https://cms-assets.youmind.com/media/1774248313334_kgc3f7_HEDWL35boAA47qE.jpg"
    ],
    "tags": [
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 55,
    "title": "YouTube Thumbnail - Drake with Orbiting Glass Music Interfaces",
    "description": "A prompt for generating an image of Drake surrounded by numerous 3D Spotify and Apple Music interface cards. It specifies the material (translucent frosted glass), movement (orbiting, motion blur), li...",
    "prompt": "Numerous 3D Spotify and Apple Music interface cards orbiting Drake at varying depths.\nMaterial: Translucent frosted glass (glassmorphism) with soft rounded edges and subtle glowing borders.\n Movement: Some cards are in the extreme foreground, partially obscuring Drake, while others drift into the distance behind him.\nVisual Accents: Dynamic motion blur on the edges of the cards to suggest a swirling, orbiting movement.\nLIGHTING & COMPOSITION\nLighting: Natural tones with enhanced professional photo quality. The soft glow from the interface cards subtly illuminates Drake’s face.\nFocus: Strong depth of field. The background and extreme foreground cards are artistically blurred, keeping the focus sharp on Drake and the closest player interfaces.\nComposition: A cinematic wide or medium shot that emphasizes the scale of the floating AR elements.\nAESTHETIC\nHigh-end editorial music photography, futuristic AR concept, clean and airy vibe. 8k resolution, sophisticated lighting, and realistic textures on the glass cards.",
    "images": [
      "https://cms-assets.youmind.com/media/1774074523220_tvlp28_HD33QM4boAAv5bd.jpg",
      "https://cms-assets.youmind.com/media/1774074523287_qsbpae_HD33QM5boAIro6Y.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 56,
    "title": "YouTube Thumbnail - Cinematic Food Short Video Prompt (Summary)",
    "description": "A summary of a cinematic food short video prompt, which was used to generate images in Nano Banana Pro and then converted into a video using Kling 3.0 Omni. The prompt was generated by GPT-5.",
    "prompt": "A cinematic food short video composed of 4 cuts, emphasizing warm lighting and ASMR sound. It smoothly transitions from rhythmic ingredient cuts captured with a macro lens to a slow-motion frying scene. Shallow depth of field is used to depict cute hand plating, concluding with the finished dish and the lingering feeling of the meal. Utilizing match cuts and motion blur to create an immersive experience where sight and sound seamlessly connect.",
    "images": [
      "https://cms-assets.youmind.com/media/1774074543760_krfqhl_HD0VdVtaoAAMrXL.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 57,
    "title": "YouTube Thumbnail - Image Transformation Prompt for Nano Banana Pro (Content Creator Studio)",
    "description": "A prompt for Google Nano Banana Pro that instructs the model to transform an existing image by placing the subject in a modern content creator studio setting, adding professional podcast equipment, ac...",
    "prompt": "Transform this image into a modern content creator studio. Place the subject sitting at a desk with a professional podcast setup, including a mounted microphone arm and studio microphone in front of them. Add acoustic foam panels on the walls for a soundproof studio look. Include colorful LED tube lights (blue and pink tones) in the background for a cinematic YouTube aesthetic. He's wearing a nice jacket with nice apple airpods.Keep the subject’s face realistic and unchanged, with natural skin tones. Add soft, professional lighting on the face (key light + subtle rim light).\nStyle: high-quality YouTube creator setup, cinematic lighting, vibrant but clean colors, sharp focus, professional studio environment, modern and minimal.",
    "images": [
      "https://cms-assets.youmind.com/media/1773902654437_eb5buk_HDuy3wKb0AAGQlp.jpg",
      "https://cms-assets.youmind.com/media/1773902654564_ymnw9n_HDuy3wLb0AAB7dv.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 58,
    "title": "YouTube Thumbnail - Cinematic 3x3 Grid Camera Angle Prompt",
    "description": "A prompt for Nano Banana 2 to generate a cinematic 3x3 grid presenting nine different camera angles of the same female subject standing next to a car outdoors at dusk. It specifies various shots (clos...",
    "prompt": "A cinematic 3×3 grid presenting multiple camera angles of the same female subject outdoors at dusk. A young woman wearing a patterned black shirt stands beside a car on a rural road, surrounded by open fields and distant hills. Each frame shows a distinct shot: extreme close-up, medium shot, over-the-shoulder, wide shot, high-angle top-down, low-angle, profile, three-quarter rear view, and full back view. Natural blue-hour lighting, soft sky gradients, realistic colors, shallow depth of field, cinematic framing. Consistent subject appearance across all frames, film-still aesthetic, professional cinematography reference sheet style, ultra-realistic photography.",
    "images": [
      "https://cms-assets.youmind.com/media/1773816078093_vzf9za_HDlj765bEAEC_Be.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 59,
    "title": "YouTube Thumbnail - Decorative Cinematic Title Font Generation",
    "description": "A prompt template designed to generate an original decorative cinematic title font based on a specific word, visually evoking the meaning of that word, with the background color chosen according to th...",
    "prompt": "Based on the word “{argument name=\"word\" default=\"[WORD]\"},” design an original decorative cinematic title font that visually evokes the meaning of the word. Use your imagination to create a unique and original design without being limited by existing typefaces. Choose the background color according to the design.",
    "images": [
      "https://cms-assets.youmind.com/media/1773729529792_e6vk8h_HDg46Ggb0AAA08C.jpg",
      "https://cms-assets.youmind.com/media/1773729529814_iandvr_HDg46GfbEAAoiCs.jpg",
      "https://cms-assets.youmind.com/media/1773729529843_5uon89_HDg4934agAAL2YH.jpg",
      "https://cms-assets.youmind.com/media/1773729530376_fzmwic_HDg493lasAAgaPe.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 60,
    "title": "YouTube Thumbnail - Anime Style Girl in Blazer Uniform Prompt for Nano Banana 2",
    "description": "A detailed prompt for Nano Banana 2 to generate an image of a cute anime-style girl in a blazer uniform, suitable for use as a streaming screen background, with specific details on appearance, setting...",
    "prompt": "A cute anime-style girl. Brown bob hair with a round silhouette, large, gentle brown eyes. Wearing a stylish blue blazer uniform with a brown bow tie, white socks, and loafers. She is smiling gently, looking at the camera with a bashful, pleasant expression. Front view composition, showing her from the waist up over a desk. The background is a calm atmosphere, like a corner of a cafe with warm light streaming in. Expressing cuteness and healing with sparkling, shojo manga-style depiction and soft colors. As a streaming screen, a semi-transparent chat window and viewer count UI are subtly placed. Aspect ratio 16:9.",
    "images": [
      "https://cms-assets.youmind.com/media/1773729534161_9rww1i_HDd4e_pXUAAICue.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 61,
    "title": "YouTube Thumbnail - Cyberpunk Science Portrait",
    "description": "A cinematic close-up prompt for Nano Banana 2 to generate a portrait of a young woman with wet hair, featuring mathematical formulas and scientific equations projected across her face in a dark, moody...",
    "prompt": "Make a cinematic close-up portrait of a young woman’s face in side profile, wet hair strands on her skin, intense reflective eyes, mathematical formulas and scientific equations projected across her face and neck, glowing white handwritten symbols, physics diagrams and abstract calculations overlay, futuristic holographic projection, dark moody background, dramatic lighting, high contrast, detailed skin texture, cyberpunk science aesthetic, shallow depth of field, volumetric lighting, photorealistic, 8k, film still, sci-fi atmosphere.",
    "images": [
      "https://cms-assets.youmind.com/media/1773643978890_2n6bg6_HDdEWxPbkAAAmCm.jpg"
    ],
    "tags": [
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 62,
    "title": "YouTube Thumbnail - Cinematic Tea Time Prompt (Shared for Image and Video Generation)",
    "description": "A prompt used for image generation (Nano Banana Pro) and subsequent video generation (Kling 3.0 Omni). The prompt, generated by GPT-5, describes a cinematic video capturing a woman's charm through del...",
    "prompt": "A cinematic video depicting a woman's charm through delicate tea time actions and changes in expression. Using shallow depth of field and warm tones, capturing close-ups of her hands pouring tea, rising steam, soft gaze, and subtle breathing fluctuations. Composed of four warm, lingering cuts with a relaxed tempo and direction, including ASMR sound elements.",
    "images": [
      "https://cms-assets.youmind.com/media/1773644008180_615x2e_HDawuiub0AAo2uQ.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 63,
    "title": "YouTube Thumbnail - Female Sorcerer Movie Poster",
    "description": "A prompt for Nano Banana Pro to generate a hyper-realistic cinematic movie poster featuring a powerful female sorcerer bursting dynamically through a cracked Queen of Spades playing card, emphasizing ...",
    "prompt": "Make a hyper-realistic cinematic movie poster of a powerful young female sorcerer bursting through a cracked Queen of Spades playing card. The card explodes outward with stone fragments, dust, and debris frozen mid-air. SHe wears an ornate royal maroon and gold embroidered mediaeval fantasy jacket, rich fabric textures, intricate detailing, regal and Comme mystical.The sorcerer extends one hand forward toward the viewer, fingers glowing with intense magical energy, subtle golden sparks and dark arcane aura surrounding the hand. Intense piercing gaze, confident and dominant expression, cinematic hero framing. Dramatic chiaroscuro lighting, dark moody background, volumetric light rays, ultra-detailed textures, shallow cinematic depth of field. Photorealistic face, epic fantasy realism, movie poster composition, high contrast, dynamic motion, . dust particles, masterpiece quality, ultra-sharp focus, 8K resolution, cinematic color grading.",
    "images": [
      "https://cms-assets.youmind.com/media/1773643981276_xt5huj_HDaQx9PaMAIRCOJ.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 64,
    "title": "Comic / Storyboard - Four-Panel Manga: 2026 Solo Camping Declaration of Independence",
    "description": "A prompt for generating a four-panel manga titled '2026 Solo Camping Declaration of Independence' using Nano Banana Pro (Gemini 3 Pro Image). The scenario involves a reference to a comedian and a pred...",
    "prompt": "4-panel manga\n \nTitle\n2026 Solo Camping Declaration of Independence\n\nBiking (comedian duo) Mimura, who is that?\n\nIt's not garbled text, it's a pseudonym! Just kidding\n\nGovernment AI Gennai starts up and a future forecast",
    "images": [
      "https://cms-assets.youmind.com/media/1774248324376_zntvf3_HECdkLpa0AA6nCS.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 65,
    "title": "Comic / Storyboard - Four-Panel Manga: The Darkness of SNS (Part 2)",
    "description": "A prompt for generating a four-panel manga titled 'The Darkness of SNS' using Nano Banana Pro (Gemini 3 Pro Image). The theme is about 'impression zombies' or impression boosting services, questioning...",
    "prompt": "4-panel manga\n \nTitle\nThe Darkness of SNS\n\nWas it impression zombies?\n\nIt's different from that\nImpression boosting service?\n\nI don't understand the point of the free version group\n\n(Laugh)...\n\n↓\nBreakdown Part 1",
    "images": [
      "https://cms-assets.youmind.com/media/1774248325743_u49fut_HEBSX4ea4AAUueG.jpg",
      "https://cms-assets.youmind.com/media/1774248325811_jwqqac_HEBSX6facAAaP92.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 66,
    "title": "Comic / Storyboard - Four-Panel Manga: The Darkness of SNS (Part 1)",
    "description": "A prompt for generating a four-panel manga titled 'The Darkness of SNS' using Nano Banana Pro (Gemini 3 Pro Image). The theme is about services that sell YouTube views, contrasting with the user's zer...",
    "prompt": "4-panel manga\n \nTitle\nThe Darkness of SNS\n\nApparently, there's a service where you can buy YouTube views\n\nNot to brag,\n\nBut my playlist\n\nHas 0 content! (Laugh)\n\n↓\nBreakdown Part 1",
    "images": [
      "https://cms-assets.youmind.com/media/1774248324263_gmc7ch_HEBSHUaaMAAiBbb.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 67,
    "title": "Comic / Storyboard - Makoto Shinkai Inspired Anime Cinematic Scene",
    "description": "A prompt for Google Nano Banana Pro to generate an anime-style cinematic image inspired by Makoto Shinkai. The scene features a young boy and a fluffy spirit cat in a narrow European cobblestone alley...",
    "prompt": "Anime cinematic style, Makoto Shinkai inspired, soft blue hour lighting, narrow European cobblestone alley, warm shop lights, dreamy atmosphere, shallow depth of field, soft bloom, lens flare, highly detailed, consistent character: young boy with messy light brown hair, navy coat, scarf, white fluffy spirit cat with faint glow",
    "images": [
      "https://cms-assets.youmind.com/media/1774248309891_ltvw6u_HEA86DGasAA7us3.jpg",
      "https://cms-assets.youmind.com/media/1774248309929_0wnuc8_HEA86FLaoAAg4Og.jpg",
      "https://cms-assets.youmind.com/media/1774248309965_bql7ts_HEA86AXaYAAnEsa.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 68,
    "title": "Comic / Storyboard - Four-Panel Manga: Labyrinth of Objection",
    "description": "A prompt for generating a four-panel manga titled 'Labyrinth of Objection' using Nano Banana Pro (Gemini 3 Pro Image). The theme is about purchasing YouTube views and the mechanical nature of the inte...",
    "prompt": "4-panel manga\n \nTitle\nLabyrinth of Objection\n\nBuying YouTube views\n\nGetting caught by the director\n\nI don't know since I haven't experienced it\n\nIt seems like a very mechanical interaction...",
    "images": [
      "https://cms-assets.youmind.com/media/1774248324355_lskj5m_HEAG6Kma8AAiW8y.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 69,
    "title": "Comic / Storyboard - Four-Panel Manga: Countdown to Disappearance",
    "description": "A prompt for generating a four-panel manga titled 'Countdown to Disappearance' using Nano Banana Pro (Gemini 3 Pro Image). The theme revolves around the concept of purchasing views for YouTube videos,...",
    "prompt": "4-panel manga\n \nTitle\nCountdown to Disappearance\n\nApparently, there's a service where you can buy YouTube views\n\nNot to brag,\n\nBut my playlist\n\nHas 0 content! (Laugh)",
    "images": [
      "https://cms-assets.youmind.com/media/1774248322525_9zdffe_HEAGXV4b0AApaiI.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 70,
    "title": "Comic / Storyboard - Nano Banana Pro 4-Panel Comic Prompt: Bach in Heaven",
    "description": "A prompt used with Nano Banana Pro (Gemini 3 Pro Image) to generate a 4-panel comic titled 'Bach in Heaven, Business on Earth' or 'The Light and Shadow of the Urtext'.",
    "prompt": "4-panel comic\n\nTitle\n\"Bach in Heaven, Business on Earth\"\n​or\n\"The Light and Shadow of the Critical Edition (Urtext)\"",
    "images": [
      "https://cms-assets.youmind.com/media/1774161444478_wq8m1w_HD9uRS0bUAEILdq.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 71,
    "title": "Comic / Storyboard - Cinematic Macro Toy-Photography of Mini Beasts",
    "description": "A complex, multi-section prompt for generating a cinematic macro toy-photography scene. The concept involves dozens of miniature identical character instances working on a giant open comic book that t...",
    "prompt": "A cinematic macro toy-photography scene of the uploaded reference character multiplied into dozens of miniature identical instances, each actively working on a giant open comic book that tells the story of the same character.\nLikeness Integrity (CRITICAL)\n\nAll miniature instances must preserve the exact identity of the reference character:\n\n• identical proportions\n\n• exact eye shape, spacing, stylization\n\n• same silhouette and material behavior\n\n• no added features, no face changes, no stylization drift\nThe comic book artwork must depict the exact same character design language, translated into printed comic style without altering anatomy or facial structure.\nScene Concept & Action\nThe giant comic book lies open like a construction site of narrative.\nMini characters are scattered across the pages, each performing a specific task:\n• some are drawing panels with tiny tools (pens, brushes, stylus-like tools)\n\n• some are painting color into panels\n\n• some are climbing panel borders like scaffolding\n\n• some are inspecting scenes, pointing, directing\n\n• some are physically interacting with the comic world ( lifting panels, stepping into frames)\nThe scene must feel like they are building their own story in real-time.\nPerspective & Composition (MANDATORY)\nCamera & Perspective (Corrected)\nLow-angle macro shot, camera positioned close to the comic page\nLens: 90–100mm macro (compression, NOT distortion)\n• Perspective compression must preserve consistent object scale\n\n• Foreground character appears larger only due to proximity to lens\n\n• No exaggerated wide-angle distortion\n\n• Spatial depth created through distance falloff + focus, not scaling\n\n• The open comic book stretches diagonally into depth\n\n• Panels form strong leading lines across the frame\n\n• Composition is intentionally off-balance, not centered\n\n• Some characters partially cropped by frame edges\nForeground includes blurred ink tools, paper edges, or panel borders creating depth layering\nDepth of Field (CRITICAL)\nExtremely shallow depth of field\n• Primary focal plane: one or two mini characters in the foreground actively working\n\n• Mid-ground characters slightly softer\n\n• Background characters and panels fall into creamy blur\nNo full-frame sharpness\nFocus must guide the viewer toward the “main worker” character\nLighting Doctrine\nHard directional cinematic light from top-left\n• sharp shadows cast across comic panels\n\n• subtle rim light separating characters from page\n\n• ink reflections create small specular highlights\n\n• shadows from panel edges create natural depth\nNo flat lighting\nEnvironment & Surface Detail\nMacro-level realism of the comic book:\n• visible paper fibers\n\n• ink texture and slight gloss\n\n• subtle imperfections in print\n\n• panel borders slightly raised or embossed\nTiny tools leave micro mar",
    "images": [
      "https://cms-assets.youmind.com/media/1774161440924_igvzbo_HD8hTgkaIAAP3Mq.jpg"
    ],
    "tags": [
      "photography"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 72,
    "title": "Comic / Storyboard - 4-Panel Manga: Anonymous and Mask",
    "description": "A prompt for Nano Banana Pro (Gemini 3 Pro Image) to generate a 4-panel manga titled 'Anonymous and Mask.' The description specifies a scene inside a moving car where a man in the back seat receives a...",
    "prompt": "4-panel manga\nTitle\n\nAnonymous and Mask\n\nDescription:\n Inside a moving car. The smartphone of the man in the back seat (center of the image) rings. The display shows 'Unknown Number'...",
    "images": [
      "https://cms-assets.youmind.com/media/1774161442662_b90gww_HD6ni-ubMAAz381.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 73,
    "title": "Comic / Storyboard - 4-Panel Manga Dialogue Prompt",
    "description": "A prompt for generating a 4-panel manga titled 'The Truth Beyond the Avatar' with specific dialogue for three characters, generated using Nano Banana Pro (Gemini 3 Pro Image).",
    "prompt": "4-panel manga\nTitle\nThe Truth Beyond the Avatar\nMan (Center): \"Hold on, I got a call from the store. Maybe they're confirming my shift.\"\nFriend A (Left): \"Oh, what is it?\"\nFriend B (Right): \"Hope they didn't find out about your fake job, did they?\"",
    "images": [
      "https://cms-assets.youmind.com/media/1774161444911_d7s13t_HD6l-taaIAA-SIB.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 74,
    "title": "Comic / Storyboard - Cinematic Portrait Reflection with Ghibli Effect",
    "description": "A detailed text prompt for Nano Banana Pro requesting a cinematic portrait of a serious man looking at his reflection in a mirror, emphasizing moody atmosphere, soft natural light, shallow depth of fi...",
    "prompt": "A cinematic portrait of a serious man use image for face reference looking at himself in a mirror, moody atmosphere, soft natural window light coming from the side, dust particles visible in the air, warm wooden interior background, shallow depth of field, sharp focus on the reflection while the back of the man is slightly blurred, emotional and introspective expression, realistic skin texture, short dark hair, light stubble, wearing a casual black jacket over a nike white t-shirt, dramatic lighting, high detail, 50mm lens, photorealistic, film still style. Add Ghibli art effects to this image.",
    "images": [
      "https://cms-assets.youmind.com/media/1773989005508_a9z53m_HDyiD23aIAEMGE9.jpg"
    ],
    "tags": [
      "portrait"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 75,
    "title": "Comic / Storyboard - Static Image Generation from Anime Prompt",
    "description": "A prompt used with DeeVid AI's Nano Banana Pro to generate nine static images suitable for a picture-story show (Kamishibai) from an anime prompt titled 'Sharon, the Out-of-Control Girl!'",
    "prompt": "Anime prompt for \"{argument name=\"title\" default=\"Sharon, the Out-of-Control Girl!\"}\" (『ハチャメチャ暴走娘シャロン！』)",
    "images": [
      "https://cms-assets.youmind.com/media/1773902683048_5ygw4j_HDt_XXObUAE5ueh.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "JA",
    "featured": false,
    "raycast": true
  },
  {
    "id": 76,
    "title": "Comic / Storyboard - Four-Panel Manga: Judgment of the Ministry of Magic",
    "description": "An image generation prompt for Nano Banana Pro (Gemini 3 Pro Image) to create a four-panel manga titled 'Judgment of the Ministry of Magic: Confrontation with Demaon,' referencing Doraemon's 'Great Ad...",
    "prompt": "4-panel manga\nTitle\n{argument name=\"title_en\" default=\"Judgment of the Ministry of Magic: Confrontation with Demaon\"}\n\nDemaon\nNobita's Great Adventure into the Underworld\n\nIt was supposed to be Demaon\nBut it didn't seem to match... lol",
    "images": [
      "https://cms-assets.youmind.com/media/1773902684319_5o1i4d_HDuBvyebsAA5UMb.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "JA",
    "featured": false,
    "raycast": true
  },
  {
    "id": 77,
    "title": "Comic / Storyboard - Four-Panel Manga: Personal Universe",
    "description": "An image generation prompt for Nano Banana Pro (Gemini 3 Pro Image) to create a four-panel manga titled 'Personal Universe,' related to the concept of an individual (pillar) and the universe.",
    "prompt": "4-panel manga\nTitle\n{argument name=\"title_en\" default=\"Personal Universe\"}\n\nIt's about an individual (pillar) and the universe...\n\nOmitted",
    "images": [
      "https://cms-assets.youmind.com/media/1773902683901_t6ew8i_HDt__33aUAADq9O.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "JA",
    "featured": false,
    "raycast": true
  },
  {
    "id": 78,
    "title": "Comic / Storyboard - High-Speed Cinematic Cyberpunk Scene Prompt",
    "description": "A highly detailed, multi-section prompt designed to turn an uploaded character reference into a photorealistic, high-speed cinematic scene on a rain-slicked cyberpunk street, emphasizing strict identi...",
    "prompt": "A cinematic speed-motion shot of the uploaded reference character captured mid-slide on a rain-slicked, neon-drenched cyberpunk street. The focus is equally on the reflection and the character, forming a dual-layer composition. Likeness Preservation (CRITICAL): Maintain exact proportions, eye shape, spacing, stylization, silhouette, and material identity from the reference. Do not humanize. Do not reinterpret anatomy. Do not modify facial structure. Identity must remain perfectly intact and instantly recognizable. 2D to 3D Translation (ONLY if input is 2D artwork): If the uploaded reference is 2D (illustration, anime, flat graphic, cel-shaded), convert it into a fully realized 3D cinematic form while preserving exact identity fidelity. Maintain exact head shape, eye design, spacing, and proportions. Preserve original stylization, do NOT add realism that alters design language. Translate linework into subtle surface geometry or shading transitions. Keep original colors, expressed through physically believable materials. Convert flat shading into controlled cinematic light falloff. The result must feel physically real, not redesigned. Camera & Perspective: Ultra-low angle, camera positioned just centimeters above the wet pavement. Lens: 18–20mm ultra-wide. Slight Dutch tilt (5–10 degrees) to destabilize the frame. Front three-quarter perspective. One limb or body part must be closer to the lens, creating perspective pressure. Composition (Reflection Dominance): The character slices diagonally across the upper half of the frame. The lower half is dominated by a sharp but slightly distorted reflection. Vertical neon signs in the background must mirror into the wet ground, forming strong graphic lines. The composition must feel off-balance and tension-driven, not centered or stable. Pose Enforcement (CRITICAL — OVERRIDE ALL DEFAULT STANCES): The character must NOT be upright, balanced, or casually sliding. The pose must represent loss of balance under high speed. The torso is pitched aggressively forward, close to the ground. One limb forcefully contacts the wet surface, creating splash and friction. The opposite limb extends outward or backward, fully stretched for counterbalance. Legs are asymmetrical: one trailing, one collapsing or stepping incorrectly. Spine forms a diagonal or curved line, never vertical. Head leads the motion slightly ahead of the torso. Weight Distribution: Weight is NOT centered. It collapses toward the contacting limb and forward motion. Ground Interaction (MANDATORY): Water splashes outward from impact points. Friction streaks beneath sliding limb. Surface tension visibly disturbed. Energy Read: The pose must feel like mid-fall recovery, evasive maneuver at high speed, barely controlled momentum. NOT clean skating, surfing, balanced glide, or upright slide. Perspective Amplification: At least one limb must appear larger due to proximity to the lens, enhancing speed and aggression. Motion & Blur: Directional motion blur trailing from the lowest moving limbs. Sharp focal plane on the face or upper torso. Background and trailing limbs fall into controlled blur. Lighting & Color (Cyberpunk Neon): Hard directional neon lighting from off-screen vertical sources. Color palette: deep cyan, magenta, electric yellow. Lighting behavior: sharp highlights on wet surfaces, strong rim light separating silhouette, deep shadow pockets. No flat lighting. Surface Detail (Hyper-Reflective): Wet pavement must feel physically real: mirror-like reflections with ripple distortion, micro scratches and pooling water, subtle rain impact patterns. Character materials slightly darkened from moisture. Atmosphere: Heavy rain and mist in the background. Volumetric light beams cutting through haze. Dense air perspective. Foreground may include subtle water droplets or mist near lens for depth. Emotion: Urgency. Instability. High-stakes motion. The character is either escaping or chasing. Negative Constraints: No centered composition. No upright balanced pose. No clean symmetrical stance. No dry surfaces. No flat reflections. No studio lighting. No evenly sharp full-frame clarity. No static posture. Background Pixel Wall Art (Depth-Controlled): Replace the LED sign with a weathered wall-mounted pixel-art mural or printed panel of the character. The pixel version must preserve silhouette and identity but appear faded, worn, and partially damaged. Printed or painted on a rough wall surface, not glowing like a screen. Subtle grime, scratches, peeling, or moisture distortion. Colors desaturated and affected by environment. Depth Control (CRITICAL): Must sit clearly in the background plane. Slightly obscured by haze, rain, or foreground motion. Edges softened, not crisp. Reduced contrast compared to main subject. Lighting Integration: Does NOT emit light. Only receives ambient neon spill. Partially falls into shadow. Pixel Art Identity Lock (CRITICAL): The pixel-art version must be a direct downscaled translation of the original character, not a reinterpretation. Preserve exact silhouette, head shape, and proportions. Preserve exact eye shape and spacing in simplified pixel form. Use the same facial structure logic — do NOT invent or add features. STRICT PROHIBITIONS: No added nose. No added mouth. No added facial features that do not exist in the original. No stylization drift toward generic pixel characters. If the original character has a minimal or abstract face, the pixel version must remain equally minimal. Foreground Chaos Layer (CRITICAL – DEPTH & IMMERSION): Introduce aggressive near-lens elements that partially obstruct the frame and enhance depth. Near-Lens Elements: Water droplets, splashes, or streaks crossing very close to the camera. Out-of-focus rain particles catching neon light. Small debris or mist fragments passing across the lens plane. These elements must feel physically between the viewer and the character, not part of the background. Depth Behavior (MANDATORY): Foreground elements are heavily out of focus due to proximity. Large soft bokeh shapes or streaks may partially cover edges of the frame. Some elements may briefly occlude parts of the character or reflection. The frame must feel layered: foreground chaos, main subject, background environment. Lens Interaction (IMPORTANT): Subtle water streaks or droplets may appear on the lens surface. Slight distortion or refraction through droplets is allowed. Effects must remain minimal and believable, never covering the focal subject completely. Lighting Interaction: Foreground particles catch neon light (cyan, magenta, yellow). Creates glowing streaks or soft colored flares. Adds dimensional separation between planes. Composition Impact: Frame edges may feel dirty or partially blocked. The image should NOT feel clean or perfectly framed. Slight visual interference is intentional. Emotion: The viewer feels inside the scene, not watching it. ar 16:9",
    "images": [
      "https://cms-assets.youmind.com/media/1773902657351_abdtvq_HDs0C91XYAAH6Jw.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 79,
    "title": "Comic / Storyboard - Four-Panel Manga: Double Accounting",
    "description": "An image generation prompt for Nano Banana Pro (Gemini 3 Pro Image) to create a four-panel manga titled 'Double Accounting,' featuring characters Koto-ge Moto and Katsura.",
    "prompt": "4-panel manga\nTitle\n{argument name=\"title_en\" default=\"Double Accounting\"}\n\nKotoge Moto\nWig is amazing...\n\nLooks like a different person lol",
    "images": [
      "https://cms-assets.youmind.com/media/1773902683546_d5n4am_HDsRW3CakAAR-_v.jpg",
      "https://cms-assets.youmind.com/media/1773902683691_4zdf8k_HDsRW2TbwAA9pSh.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "JA",
    "featured": false,
    "raycast": true
  },
  {
    "id": 80,
    "title": "Comic / Storyboard - Four-Panel Manga Prompt: Judgment of the Ministry of Magic",
    "description": "A prompt for Nano Banana Pro (Gemini 3 Pro Image) to generate a four-panel manga titled 'Judgment of the Ministry of Magic,' focusing on the concept of 'cache' (reality) versus 'cache' (footprints) an...",
    "prompt": "4-panel manga\nTitle: Judgment of the Ministry of Magic\n\nCache (reality)\nand\nCache (footprints)\n\nWhat is the weight of cache...",
    "images": [
      "https://cms-assets.youmind.com/media/1773816088470_hbe45v_HDorYaSbEAA33ox.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 81,
    "title": "Comic / Storyboard - 4-Panel Manga: The Long Road to 170 Yen Gasoline Price",
    "description": "A prompt for Nano Banana Pro (Gemini 3 Pro Image) to generate a 4-panel manga titled 'The Long Road to 170 Yen Gasoline Price,' featuring the comedy duo Reiwa Roman, likely commenting on high gasoline...",
    "prompt": "4-panel manga\nTitle:\nThe Long Road to 170 Yen Gasoline Price\n\nReiwa Roman edition",
    "images": [
      "https://cms-assets.youmind.com/media/1773816091521_1xpl3n_HDmwR5VbEAEMRlR.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 82,
    "title": "Comic / Storyboard - Four-Panel Manga Prompt: Oil Rush Panic",
    "description": "A prompt for Nano Banana Pro (Gemini 3 Pro Image) to generate a four-panel manga titled 'Oil Rush Panic,' mentioning the comedy duo Viking and specifically the member Eiji Kotouge.",
    "prompt": "4-panel manga\nTitle:\n'Oil Rush Panic'\n\nViking?\n\nOnly Eiji Kotouge\nBarely...\n\nOthers changed characters",
    "images": [
      "https://cms-assets.youmind.com/media/1773816090097_a2qlj6_HDmvLPRbEAEDpXq.jpg"
    ],
    "tags": [
      "anime"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 83,
    "title": "Comic / Storyboard - Pop Art comic book illustration prompt for Nano Banana Pro",
    "description": "A detailed prompt for Nano Banana Pro to generate a highly stylized, single-panel sequential art illustration in the classic 1960s Pop Art comic book aesthetic (Roy Lichtenstein inspired), featuring a...",
    "prompt": "A highly stylized, single-panel sequential art illustration, executed in the classic 1960s Pop Art comic book aesthetic (Roy Lichtenstein inspired). The scene features a startled woman seated on a plush, magenta mid-century modern couch, frozen in an act of surprise. She wears vibrant, high-contrast clothing and is conspicuously holding a single, bright yellow banana. The background shows a door dramatically flung open, revealing a towering, solid black silhouette of a man framed by deep shadows. The entire image is rendered using thick, heavy black ink outlines, exaggerated facial expressions, and pervasive Ben-Day halftone dots. A large, dynamic speech bubble, shaped like a yellow starburst, bursts from the woman's mouth, containing the bold, capitalized text: \"{argument name=\"speech bubble text\" default=\"IT'S NOT WHAT IT LOOKS LIKE!\"}\" High contrast lighting, vibrant primary color palette, cinematic comic book framing.",
    "images": [
      "https://cms-assets.youmind.com/media/1773816098152_7dmlw2_HDmiRxQX0AAdDHs.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 84,
    "title": "Product Marketing - Hyper-realistic Origami Sculpture",
    "description": "A prompt for generating a hyper-realistic close-up of an intricate origami sculpture. It emphasizes crisp folds, realistic paper texture, subtle shadows, and soft natural lighting, allowing the user t...",
    "prompt": "hyper-realistic close-up of a stunning origami sculpture of **{argument name=\"thing\" default=\"thing\"}** made from intricately folded paper, displayed on a minimalist wooden table, extremely detailed and precise paper folds, crisp edges, subtle shadows in every crease, realistic paper texture with visible fibers and slight translucency, soft natural window light casting gentle dramatic shadows that highlight the origami structure, elegant and artistic composition, clean background, masterpiece, ultra detailed, photorealistic paper art",
    "images": [
      "https://cms-assets.youmind.com/media/1774508267998_zbmur2_HERRqE2aYAAe5HP.jpg",
      "https://cms-assets.youmind.com/media/1774508267997_53ww5y_HERSSFoXUAA-qtj.jpg",
      "https://cms-assets.youmind.com/media/1774508268015_p85nxh_HERRqELW8AAuRwF.jpg",
      "https://cms-assets.youmind.com/media/1774508268496_uw7ftk_HERSWOwbUAAraGc.jpg"
    ],
    "tags": [
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 85,
    "title": "Product Marketing - Luxury Night Fashion Moodboard (Day 2)",
    "description": "A highly detailed, structured prompt for generating a luxury fashion moodboard (Day 2) with a dark, confident, and high-contrast aesthetic. It specifies chrome silver typography, a black/metallic even...",
    "prompt": "Create DAY 2 as a confident night-time luxury moodboard with a darker, more powerful aesthetic. Maintain the clean minimal editorial structure with strong hierarchy and negative space. Use soft ivory or cool champagne neutral background (no warm gold tones). Same minimal structure as DAY 1 with elevated contrast and sharper visual presence. Title: DAY 2 in large bold modern high-fashion serif in chrome silver, mirror-like metallic finish, sharp and reflective with cool-toned metallic reflections, strong contrast, modern luxury feel. Quote: 'Own the night without asking.' in minimal refined script in soft silver. Strict rules: no gold tones, typography must be chrome silver, cool modern aesthetic only. Hero dress: black or deep metallic satin halter-neck or sleek slip evening dress, body-hugging, modern, slightly daring cut, luxury finish. Shoes: one pair of black or chrome metallic heels, sharp silhouette. Bag: one small luxury evening bag in black, chrome, or cool metallic tone. Jewelry: one bold minimal silver piece, such as cuff or statement earrings. Photo: luxury rooftop or city night dinner setting with skyline lights, elegant candles, cinematic night atmosphere. Cocktail: one espresso martini or dark-toned cocktail in a refined glass. Style shift from soft romantic beach to confident night city energy, mood bold, sharp, magnetic, modern, high-fashion. Visual language: modern fashion campaign, minimal, sharp, high contrast. Lighting feel: cool-toned highlights enhancing chrome reflections. Aspect ratio 4:5, render style luxury_editorial_collage_realism, sharpness ultra_crisp, color grade midnight_black_chrome_silver. Must have: DAY 2 chrome silver title, black or metallic dress, one pair of heels, one bag, one jewelry piece, one cocktail, one city night photo, minimal layout. Negative prompt: gold typography, warm tones, yellow dress, beach vibe, extra accessories, messy layout, low contrast, cheap styling, low detail. Also create a matching realistic fashion scene using the reference woman as the exact subject, keep her face, identity, and proportions consistent, transform into DAY 2 night luxury fashion setting, single realistic cinematic scene not collage. Environment: luxury rooftop or elegant city night setting with soft lights, modern atmosphere, mood confident, modern, magnetic, night luxury. All outfit, accessories, and styling must naturally match the reference woman's appearance, proportions, and aesthetic. Outfit: high-fashion evening outfit that suits the reference woman perfectly, modern, elegant, slightly bold, night-appropriate. Bag placed naturally on a table or next to her, never floating. Shoes worn by the woman, fully integrated with the outfit. Jewelry worn on the woman, subtle but luxury, not separate objects. Drink either in her hand or placed naturally on a table, luxury cocktail matching the night setting. No floating objects, no random scatter, realistic positions only, all objects must obey real-world placement and balance. Camera: medium or full-body fashion shot, editorial slightly cinematic, lens 50mm or 85mm, focus sharp on face and outfit. Lighting: night luxury lighting, soft highlights with subtle reflections, clean modern contrast. Must have: same reference woman, identity preserved, cohesive styling, realistic placement, no floating objects, night luxury mood, single scene no collage. Negative: collage, floating bag, floating shoes, floating jewelry, random objects, bad placement, different face, identity change, messy composition, low realism.",
    "images": [
      "https://cms-assets.youmind.com/media/1774508268556_t5q173_HERKLgYXIAAH-wY.jpg",
      "https://cms-assets.youmind.com/media/1774508268558_c9jj5y_HERKLgXXkAApHiw.jpg"
    ],
    "tags": [
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 86,
    "title": "Product Marketing - Ultra-realistic Beverage Product Photography Prompt",
    "description": "A highly detailed prompt for Nano Banana Pro to generate ultra-realistic, high-end beverage product photography, focusing on a chilled matte aluminum can (Nexora) with condensation, dynamically suspen...",
    "prompt": "Ultra-realistic high-end beverage product photography set in a premium studio environment with a seamless gradient background inspired by {argument name=\"fruit type\" default=\"FRUIT\"} tones, blending rich {argument name=\"color shade\" default=\"COLOR\"} shades with soft complementary hues. The atmosphere is clean, vibrant, and luxurious with a refined commercial aesthetic.\nThe surface is a glossy reflective liquid plane in matching {argument name=\"fruit type 2\" default=\"FRUIT\"}-inspired tones, featuring subtle ripples and smooth reflections, enhancing depth and realism.\nCenter frame features a chilled matte aluminum can with a smooth premium gradient finish inspired by [FRUIT] colors. The can is covered with ultra-fine condensation droplets, showcasing realistic cold texture and freshness while maintaining a polished luxury look.\nThe can design features large, elegant flowing script typography reading \"Nexora\" in a glossy gradient inspired by [FRUIT] tones, with subtle luminous highlights. Beneath it, minimal modern text enhances branding, along with a small circular seal in metallic finish.\nAbove the can, fresh [FRUIT] elements (whole, sliced, or stylized pieces) are captured mid-air in a dynamic yet controlled composition. A rich {argument name=\"liquid texture\" default=\"TEXTURE\"} liquid stream matching the fruit flows down into or around the can, creating a smooth, elegant crown splash with high-speed fluid detail.\nAdditional droplets and fruit particles are suspended in motion, enhancing realism and depth. The reflective surface below mirrors the product with soft distortions and cinematic detail.\nLighting is studio-grade and premium:\nsoft diffused lighting for clean highlights\nsubtle rim lighting to enhance edges\ngentle glow for a luxury finish\nCamera: macro lens, shallow depth of field, cinematic front angle with slight push-in composition. Background softly blurred while the product remains ultra-sharp.\nStyle: ultra-luxury commercial beverage ad, hyper-realistic textures, 8K HDR, cinematic lighting, premium branding, vibrant yet refined aesthetic.",
    "images": [
      "https://cms-assets.youmind.com/media/1774508281557_jkc2wb_HEREU5PaEAANZ76.jpg",
      "https://cms-assets.youmind.com/media/1774508281472_eiq3wq_HEREU7FacAEvaWd.jpg",
      "https://cms-assets.youmind.com/media/1774508281559_rf21vn_HEREU8-asAAwQT9.jpg",
      "https://cms-assets.youmind.com/media/1774508282253_pjh354_HEREVBQaMAAye_n.jpg"
    ],
    "tags": [
      "photography",
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 87,
    "title": "Product Marketing - 9-Panel Dance Editorial Grid with Identity Lock",
    "description": "A complex, structured prompt for generating a 3x3 editorial grid of a woman performing contemporary dance poses. It requires image-to-image mode to lock the facial identity across all nine panels whil...",
    "prompt": "Generate a 3x3 photo grid of the same woman with consistent facial identity throughout all panels. Use the reference image only for the face—do not copy any clothing, styling, or pose from it. Create a brand new luxurious butter-yellow contemporary dance outfit: asymmetrical one-shoulder satin top with high-waisted wide-leg dance pants. Hair and makeup should be polished and consistent across panels. Each panel shows a different dramatic dance pose in a clean premium studio setting. Photorealistic quality with perfect anatomy, realistic hands, sharp focus on face, warm editorial lighting, and subtle film grain. Ultra-high resolution 4:5 portrait format.",
    "images": [
      "https://cms-assets.youmind.com/media/1774508269751_noiv1j_HERChY_W8AEFw9y.jpg"
    ],
    "tags": [
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 88,
    "title": "Product Marketing - Golden Hour Goddess Editorial Portrait",
    "description": "A structured prompt for Nano Banana Pro to generate a luxury outdoor editorial portrait with a classical goddess aesthetic, featuring a young woman (identity preserved from reference image) in a flowy...",
    "prompt": "{\n\"photo_type\":\"luxury outdoor editorial, classical goddess aesthetic\",\n\n\"subject\":{\n\"type\":\"young woman\",\n\"use_reference_image\":true,\n\"face_reference\":true,\n\"preserve_identity\":true,\n\"instruction\":\"strictly use the provided reference face, do NOT change facial structure, skin tone, eye color, or hair color\",\n\"pose\":\"standing near a classical statue, body slightly turned, one shoulder angled toward camera, relaxed elegant posture\",\n\"expression\":\"soft confident expression, calm and slightly distant gaze\"\n},\n\n\"appearance\":{\n\"hair\":\"same as reference image, softly styled with natural movement, unchanged color\",\n\"eyes\":\"same as reference image, unchanged\",\n\"skin\":\"sun-kissed glow with natural highlights\",\n\"makeup\":\"soft glam, warm tones, subtle highlight\"\n},\n\n\"outfit\":{\n\"clothing\":\"{argument name=\"clothing type\" default=\"flowy white chiffon dress\"}, light and elegant\",\n\"accessories\":[\n\"delicate earrings\",\n\"minimal bracelet\"\n],\n\"style\":\"goddess, timeless, luxurious\"\n},\n\n\"environment\":{\n\"location\":\"classical outdoor terrace\",\n\"elements\":[\n\"stone statue\",\n\"pillars\",\n\"warm beige architecture\",\n\"green hedges\"\n]\n},\n\n\"lighting\":{\n\"type\":\"natural sunlight\",\n\"setup\":[\n\"strong warm sunlight\",\n\"defined shadows\",\n\"golden highlights on skin\",\n\"cinematic contrast\"\n]\n},\n\n\"camera\":{\n\"angle\":\"slightly low angle\",\n\"framing\":\"mid to full body portrait\",\n\"focus\":\"sharp subject, soft background\"\n},\n\n\"color_grading\":{\n\"style\":\"cinematic editorial\",\n\"tones\":\"warm gold, cream, soft green\",\n\"contrast\":\"medium\",\n\"saturation\":\"warm and rich\"\n},\n\n\"details\":{\n\"must_include\":[\n\"reference face unchanged\",\n\"same hair and eye color\",\n\"classical statue\",\n\"white flowing dress\",\n\"golden sunlight\",\n\"luxury aesthetic\"\n],\n\"avoid\":[\n\"dark tones\",\n\"modern clutter\",\n\"overediting\",\n\"flat lighting\"\n]\n}\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774508277039_9rsxod_HEQ3P2XbEAAP1Fe.jpg",
      "https://cms-assets.youmind.com/media/1774508276812_crkq67_HEQ3PAPawAAsEtY.jpg"
    ],
    "tags": [
      "portrait",
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 89,
    "title": "Product Marketing - Pastel Cinematic Studio Editorial Prompt",
    "description": "A structured JSON prompt for Nano Banana Pro to generate a soft, pastel cinematic studio editorial image of a young woman, requiring the strict use of a reference face and specific details like a ligh...",
    "prompt": "{\n\"photo_type\":\"studio editorial, soft pastel minimal aesthetic\",\n\n\"subject\":{\n\"type\":\"young woman\",\n\"use_reference_image\":true,\n\"face_reference\":true,\n\"preserve_identity\":true,\n\"instruction\":\"strictly use the provided reference face, do NOT change facial structure, skin tone, eye color, or hair color\",\n\"pose\":\"kneeling on the floor, body leaning slightly forward, hands placed on ground, legs folded back, elegant posture\",\n\"expression\":\"soft dreamy expression, slightly distant gaze, relaxed lips\"\n},\n\n\"appearance\":{\n\"hair\":\"same as reference image, long soft waves, unchanged color\",\n\"eyes\":\"same as reference image, unchanged\",\n\"skin\":\"smooth glowing skin with soft highlights\",\n\"makeup\":\"soft glam, pastel tones, subtle blush and glossy lips\"\n},\n\n\"outfit\":{\n\"clothing\":\"light blue satin mini dress with delicate details\",\n\"accessories\":[\n\"long white satin gloves\",\n\"pearl anklet\",\n\"heels with soft embellishments\"\n],\n\"style\":\"feminine, doll-like, high fashion\"\n},\n\n\"environment\":{\n\"location\":\"studio\",\n\"background\":\"plain pastel blue seamless backdrop\",\n\"floor\":\"matching pastel tone, clean and minimal\"\n},\n\n\"lighting\":{\n\"type\":\"soft studio lighting\",\n\"setup\":[\n\"diffused even lighting\",\n\"low shadow contrast\",\n\"soft glow on skin\",\n\"clean editorial look\"\n]\n},\n\n\"camera\":{\n\"angle\":\"slightly low and front angle\",\n\"framing\":\"full body with negative space\",\n\"focus\":\"sharp subject, smooth background\"\n},\n\n\"color_grading\":{\n\"style\":\"pastel cinematic\",\n\"tones\":\"baby blue, soft white, light skin tones\",\n\"contrast\":\"low\",\n\"saturation\":\"soft and airy\"\n},\n\n\"details\":{\n\"must_include\":[\n\"reference face unchanged\",\n\"same hair and eye color\",\n\"pastel blue background\",\n\"soft feminine pose\",\n\"clean studio aesthetic\"\n],\n\"avoid\":[\n\"dark tones\",\n\"harsh shadows\",\n\"overediting\",\n\"busy background\"\n]\n}\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774508279373_tzu9hb_HEQzPYoaIAAtzX9.jpg",
      "https://cms-assets.youmind.com/media/1774508279316_jap651_HEQzQOCbAAAy9AH.jpg",
      "https://cms-assets.youmind.com/media/1774508279510_0yale4_HEQzOsmacAAdsTJ.jpg"
    ],
    "tags": [
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 90,
    "title": "Product Marketing - High Fashion Red Carpet Editorial Prompt",
    "description": "A structured JSON prompt for Nano Banana Pro to generate a high fashion red carpet editorial image of a young woman, requiring the strict use of a reference face and specific details like a long black...",
    "prompt": "{\n\"photo_type\":\"high fashion red carpet editorial, luxury event aesthetic\",\n\n\"subject\":{\n\"type\":\"young woman\",\n\"use_reference_image\":true,\n\"face_reference\":true,\n\"preserve_identity\":true,\n\"instruction\":\"strictly use the provided reference face, do NOT change facial structure, skin tone, eye color, or hair color\",\n\"pose\":\"standing confidently on a red carpet, body slightly angled, arms relaxed with elegant positioning, walking or mid-step pose\",\n\"expression\":\"strong confident expression, slightly serious, high-status presence\"\n},\n\n\"appearance\":{\n\"hair\":\"same as reference image, sleek styled hair, unchanged color\",\n\"eyes\":\"same as reference image, unchanged\",\n\"skin\":\"smooth natural glow with professional finish\",\n\"makeup\":\"glamorous evening makeup, defined eyes, sculpted face\"\n},\n\n\"outfit\":{\n\"clothing\":\"long black lace evening gown, fitted silhouette, elegant and bold\",\n\"accessories\":[\n\"statement earrings\",\n\"minimal jewelry\"\n],\n\"style\":\"luxury, red carpet, high fashion\"\n},\n\n\"environment\":{\n\"location\":\"red carpet event\",\n\"elements\":[\n\"event backdrop with abstract shapes\",\n\"soft carpet flooring\",\n\"studio-style event lighting\"\n]\n},\n\n\"lighting\":{\n\"type\":\"professional event lighting\",\n\"setup\":[\n\"bright front lighting\",\n\"soft shadows\",\n\"even exposure\",\n\"slight glow on skin\"\n]\n},\n\n\"camera\":{\n\"angle\":\"eye level\",\n\"framing\":\"full body portrait\",\n\"focus\":\"sharp subject, slightly softened background\"\n},\n\n\"color_grading\":{\n\"style\":\"editorial cinematic\",\n\"tones\":\"warm neutral, deep blacks\",\n\"contrast\":\"medium to high\",\n\"saturation\":\"balanced\"\n},\n\n\"details\":{\n\"must_include\":[\n\"reference face unchanged\",\n\"same hair and eye color\",\n\"black lace gown\",\n\"red carpet vibe\",\n\"high fashion pose\"\n],\n\"avoid\":[\n\"casual look\",\n\"overediting\",\n\"harsh shadows\",\n\"plastic skin\"\n]\n}\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774508281057_zu3vg2_HEQxNJnbYAALXbz.jpg",
      "https://cms-assets.youmind.com/media/1774508281036_zg6iic_HEQxN4QbkAAGB6d.jpg",
      "https://cms-assets.youmind.com/media/1774508281343_pfs73h_HEQxOf6bYAAZy7c.jpg",
      "https://cms-assets.youmind.com/media/1774508281750_xec4y3_HEQxPPObkAALtGy.jpg"
    ],
    "tags": [
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 91,
    "title": "Product Marketing - Dynamic Futuristic Nike Fashion Ad Prompt for Nano Banana Pro",
    "description": "A prompt for Google Nano Banana Pro to generate a dynamic, futuristic fashion advertisement for Nike. It features a hyper-realistic model mid-twist jump with light trails, a prism-shifting gradient ba...",
    "prompt": "A dynamic fashion advertisement for Nike showing a hyper-realistic model mid-twist jump, light trails following her limbs. Background: prism-shifting gradient ({argument name=\"gradient color 1\" default=\"hot magenta\"} to {argument name=\"gradient color 2\" default=\"sapphire\"}) with refracted lens flares. The model wears iridescent Nike runner tights and a cropped tech hoodie in holographic white. Bold serif \"NIKE\" and motion-glitched \"LUMINA\" in layered text behind. High-energy, futuristic aesthetic with fashion gloss. --ar 3:4 --raw --stylize 750",
    "images": [
      "https://cms-assets.youmind.com/media/1774508259642_fmoenk_HEQwdN-boAEM0up.jpg",
      "https://cms-assets.youmind.com/media/1774508259779_ntgt9p_HEQwdNZbYAAuc61.jpg"
    ],
    "tags": [
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 92,
    "title": "Product Marketing - Quiet Luxury Outdoor Editorial Portrait",
    "description": "A structured prompt for Nano Banana 2 to generate a luxury outdoor editorial portrait with a soft vintage aesthetic, featuring a young woman (identity preserved from reference image) in a fitted white...",
    "prompt": "{\n\"photo_type\":\"luxury outdoor editorial portrait, soft vintage aesthetic\",\n\n\"subject\":{\n\"type\":\"young woman\",\n\"use_reference_image\":true,\n\"face_reference\":true,\n\"preserve_identity\":true,\n\"instruction\":\"strictly use the provided reference face, do NOT change facial structure, skin tone, eye color, or hair color\",\n\"pose\":\"standing near a classical stone fountain, holding a small teacup delicately in one hand, body slightly angled, relaxed elegant posture\",\n\"expression\":\"calm confident expression, soft serious gaze\"\n},\n\n\"appearance\":{\n\"hair\":\"same as reference image, styled softly with volume, unchanged color\",\n\"eyes\":\"same as reference image, unchanged\",\n\"skin\":\"natural glowing skin with warm sunlight highlights\",\n\"makeup\":\"soft glam, warm tones, subtle blush and highlight\"\n},\n\n\"outfit\":{\n\"clothing\":\"{argument name=\"clothing description\" default=\"fitted white luxury mini dress with structured details\"}\",\n\"accessories\":[\n\"long elegant gloves\",\n\"neck scarf ribbon\",\n\"delicate earrings\"\n],\n\"style\":\"old money, classy, timeless\"\n},\n\n\"environment\":{\n\"location\":\"luxury outdoor garden terrace\",\n\"elements\":[\n\"classical stone fountain\",\n\"green hedges\",\n\"tall cypress trees\",\n\"soft blurred landscape\"\n]\n},\n\n\"lighting\":{\n\"type\":\"natural sunlight\",\n\"setup\":[\n\"warm golden daylight\",\n\"soft highlights on skin\",\n\"gentle shadows\",\n\"dreamy glow\"\n]\n},\n\n\"camera\":{\n\"angle\":\"slightly low angle\",\n\"framing\":\"mid to full body portrait\",\n\"focus\":\"sharp subject, soft background blur\"\n},\n\n\"color_grading\":{\n\"style\":\"cinematic editorial\",\n\"tones\":\"warm cream, soft gold, pastel greens\",\n\"contrast\":\"low to medium\",\n\"saturation\":\"slightly warm and dreamy\"\n},\n\n\"details\":{\n\"must_include\":[\n\"reference face unchanged\",\n\"same hair and eye color\",\n\"teacup in hand\",\n\"classical fountain\",\n\"luxury sunlight aesthetic\",\n\"clean elegant composition\"\n],\n\"avoid\":[\n\"overexposure\",\n\"harsh shadows\",\n\"plastic skin\",\n\"dark tones\",\n\"modern clutter\"\n]\n}\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774508275028_0dfxwp_HEQvYoDbUAAnQSr.jpg",
      "https://cms-assets.youmind.com/media/1774508275035_tiuxzt_HEQvZU_bkAAmBcw.jpg"
    ],
    "tags": [
      "portrait",
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 93,
    "title": "E-commerce Main Image - High-End Commercial Yogurt Product Photography Prompt for Nano Banana Pro",
    "description": "A highly detailed prompt for generating commercial product photography of a yogurt cup. It specifies the product name, packaging design, dynamic elements like a milk splash wave, surrounding elements ...",
    "prompt": "High-end commercial product photography of a {argument name=\"product\" default=\"yogurt cup\"} labeled “{argument name=\"flavor\" default=\"Chergui Crème Cherry Yogurt\"}”, captured mid-air with the cup slightly tilted and the {argument name=\"lid detail\" default=\"foil lid partially peeled back\"} revealing creamy texture inside. The cup features a rich {argument name=\"packaging color\" default=\"deep purple packaging with cherry graphics and white typography\"} with subtle condensation droplets to enhance freshness. A dynamic (milk splash wave) wraps around both sides of the cup in a symmetrical flowing motion, creating a sense of energy and fluid movement. Multiple (fresh cherries with glossy skin and a few green leaves) are suspended in the air around the product, along with small floating milk droplets to enhance realism. Background is a smooth (solid purple gradient backdrop) matching the product color palette, creating a bold and premium visual identity.  Composition is a (centered front-facing angle with slight tilt) keeping the product as the hero while emphasizing motion. Lighting is soft studio lighting with bright highlights on the milk splash, gentle shadows beneath the cup, and glossy reflections enhancing the creamy texture. Fine details like liquid thickness, fruit shine, and packaging print are crisp and highly defined. Clean, vibrant, high-energy composition emphasizing creaminess, flavor, and freshness.",
    "images": [
      "https://cms-assets.youmind.com/media/1774508256710_f0bf3n_HEQEUczbwAAxnwi.jpg",
      "https://cms-assets.youmind.com/media/1774508256694_12hluf_HEQEUZlbYAA-dBQ.jpg",
      "https://cms-assets.youmind.com/media/1774508256674_5kn1dn_HEQEUZsacAA6UcG.jpg"
    ],
    "tags": [
      "photography",
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 94,
    "title": "E-commerce Main Image - High-End Commercial Yogurt Product Photography",
    "description": "A detailed prompt for generating high-end commercial product photography of a yogurt cup, captured mid-air with a dynamic milk splash wave. It specifies packaging details, surrounding elements (fresh ...",
    "prompt": "High-end commercial product photography of a ({argument name=\"product\" default=\"yogurt cup\"}) labeled “({argument name=\"label\" default=\"Chergui Crème Cherry Yogurt\"})”, captured mid-air with the cup slightly tilted and the ({argument name=\"lid condition\" default=\"foil lid partially peeled back\"}) revealing creamy texture inside. The cup features a rich ({argument name=\"packaging\" default=\"deep purple packaging with cherry graphics and white typography\"}) with subtle condensation droplets to enhance freshness.\nA dynamic (milk splash wave) wraps around both sides of the cup in a symmetrical flowing motion, creating a sense of energy and fluid movement. Multiple (fresh cherries with glossy skin and a few green leaves) are suspended in the air around the product, along with small floating milk droplets to enhance realism. Background is a smooth (solid purple gradient backdrop) matching the product color palette, creating a bold and premium visual identity.\n\nComposition is a (centered front-facing angle with slight tilt) keeping the product as the hero while emphasizing motion. Lighting is soft studio lighting with bright highlights on the milk splash, gentle shadows beneath the cup, and glossy reflections enhancing the creamy texture. Fine details like liquid thickness, fruit shine, and packaging print are crisp and highly defined. Clean, vibrant, high-energy composition emphasizing creaminess, flavor, and freshness.\n\nUltra-realistic, hyper-detailed textures, professional food advertising photography, high resolution, 8k.",
    "images": [
      "https://cms-assets.youmind.com/media/1774508268814_ku5fsz_HEPkVvbaIAAgif9.jpg",
      "https://cms-assets.youmind.com/media/1774508268823_vf1oyr_HEPkV0SaMAAvxpK.jpg"
    ],
    "tags": [
      "photography",
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 95,
    "title": "E-commerce Main Image - Commercial Lip Oil Product Photography Prompt for Nano Banana Pro",
    "description": "A detailed prompt for Nano Banana Pro to generate high-end commercial beauty product photography of a lip oil bottle. It specifies the product details, packaging materials, dynamic elements (dripping ...",
    "prompt": "High-end commercial beauty product photography of a {argument name=\"product\" default=\"lip oil bottle\"} labeled “{argument name=\"brand name\" default=\"Veloura Lippie Bestie Lip Oil\"}”, placed slightly off-center against a rich {argument name=\"background color\" default=\"deep berry red gradient background\"} with a glossy premium aesthetic. The bottle is made of (translucent glass in dark red tone) with realistic liquid texture visible inside and multiple glossy oil droplets running down the surface. The cap is open, with a (soft applicator wand) lifted above the bottle, holding a thick drop of (viscous lip oil) that is dripping downward mid-air, captured in a frozen motion moment. Surrounding the base are (fresh blackberries and a sliced blackberry) with rich juice texture and subtle wet shine, enhancing the flavor-inspired concept. Surface beneath is slightly reflective with a thin layer of liquid, creating soft reflections of the bottle and fruits. Composition is a (close-up front-facing product shot) with strong focus on the dripping applicator and bottle details. Lighting is controlled studio lighting with soft highlights, deep shadows, and glossy reflections to emphasize liquid textures and premium finish. Clean premium cosmetic advertising layout with negative space on the left side for text placement. Ultra-realistic, hyper-detailed textures, luxury skincare advertising style, high resolution, 8k.",
    "images": [
      "https://cms-assets.youmind.com/media/1774508259503_oji38k_HEO4bUxbwAA-Uy3.jpg",
      "https://cms-assets.youmind.com/media/1774508259586_goaikz_HEO4bVfa0AAuzT1.jpg",
      "https://cms-assets.youmind.com/media/1774508259780_9ew2tj_HEO4bUsa8AA3qfQ.jpg",
      "https://cms-assets.youmind.com/media/1774508260412_5k64cq_HEO4bWHbkAAsG-K.jpg"
    ],
    "tags": [
      "photography",
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 96,
    "title": "E-commerce Main Image - Macro Product Shot of Teacup with Construction Workers",
    "description": "A prompt for generating an ultra-realistic 8K macro product shot featuring a giant transparent glass teacup with a dramatic frozen hot tea splash. The scene includes tiny construction workers climbing...",
    "prompt": "{\n  \"prompt\": \"Ultra-realistic 8K macro product shot, pure white background. Giant transparent glass teacup with dramatic hot tea splash frozen mid-air. Tiny construction workers in yellow helmets climbing ladders on the rim, sweeping the saucer. Steam particles rising, rich amber liquid texture, dramatic studio lighting with high-contrast shadows and reflections\",\n  \"negative_prompt\": \"blurry, people faces, text\"\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774421478553_9n3wi0_HEMEE4fWYAAwWG6.jpg",
      "https://cms-assets.youmind.com/media/1774421478698_xrurql_HEMEE48aIAUh03o.jpg",
      "https://cms-assets.youmind.com/media/1774421478606_4o9hyy_HEMEE4pXQAAkqjc.jpg",
      "https://cms-assets.youmind.com/media/1774421479387_b7j0lb_HEMEE4eXQAAb5pu.jpg"
    ],
    "tags": [
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 97,
    "title": "E-commerce Main Image - Realistic Size Range Fashion Lineup",
    "description": "A highly structured prompt for Nano Banana 2, aimed at generating a commercial fashion realism image showing four women of different sizes (S, M, L, XL) standing side-by-side in a studio, all wearing ...",
    "prompt": "{\n  \"generation_request\": {\n    \"meta_data\": {\n      \"tool\": \"NanoBanana Pro\",\n      \"task_type\": \"realistic_size_range_fashion_lineup\",\n      \"language\": \"en\",\n      \"priority\": \"highest\",\n      \"version\": \"v2.0_REALISTIC_PASTEL_SATIN_S_M_L_XL\"\n    },\n    \"input\": {\n      \"mode\": \"text_to_image\",\n      \"notes\": \"Create a highly realistic fashion lineup showing four adult women standing side by side in one professional studio image, photographed from a slightly farther distance so the full silhouettes are clearly visible. This must look like a premium real-world size range campaign, not an AI beauty collage. Use the same satin spaghetti-strap dress design on all four women, but make the garment fit truly realistic for sizes S, M, L, and XL. Each size must have proper grading, different seam behavior, different fabric pull, different waist and bust fit, different hip drape, and different hem fall according to the body. The four dresses are the same design in different soft pastel colorways: pastel yellow, pastel blue, pastel pink, and pastel green. Add refined butterfly embellishments or applique details that feel elegant and fashion-forward, not childish. The women should look like real fashion models in a commercial editorial studio shoot, with natural posture, slight human asymmetry, believable body diversity, realistic skin texture, and subtle expression variation. Add simple clean size labels below each model: S, M, L, XL.\"\n    },\n    \"output_settings\": {\n      \"aspect_ratio\": \"4:5\",\n      \"orientation\": \"portrait\",\n      \"resolution_target\": \"ultra_high_res\",\n      \"num_images\": 1,\n      \"render_style\": \"commercial_fashion_realism\",\n      \"sharpness\": \"clean_natural\",\n      \"grain\": \"minimal\",\n      \"dynamic_range\": \"balanced_studio_realism\",\n      \"color_grade\": \"soft_pastel_editorial\"\n    },\n    \"subject\": {\n      \"casting\": \"four real-looking adult women with natural body diversity\",\n      \"size_range\": [\"S\", \"M\", \"L\", \"XL\"],\n      \"dress_design\": \"same satin spaghetti-strap dress design on all four models\",\n      \"dress_colors\": [\"pastel yellow\", \"pastel blue\", \"pastel pink\", \"pastel green\"],\n      \"dress_details\": \"elegant butterfly applique or embellishment integrated into the dress design\",\n      \"styling\": \"clean coordinated studio styling, understated hair and makeup, realistic commercial fashion presentation\"\n    },\n    \"scene\": {\n      \"environment\": \"neutral professional fashion studio background\",\n      \"pose\": \"four women standing side by side in a realistic campaign lineup, natural stance, slight pose variation, not identical\",\n      \"mood\": \"premium, believable, inclusive, elegant, modern\"\n    },\n    \"camera\": {\n      \"framing\": \"farther full-body lineup shot\",\n      \"angle\": \"straight-on commercial fashion angle\",\n      \"focus\": \"sharp on faces, garment fit, satin texture, hemline, seams, and labels\",\n      \"depth_of_field\": \"clean studio clarity\"\n    },\n    \"lighting\": {\n      \"type\": \"",
    "images": [
      "https://cms-assets.youmind.com/media/1774334467738_ksdjhu_HEHhn06a4AAppu6.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 98,
    "title": "E-commerce Main Image - Nano Banana 2 Prompt for Character Collaboration Menu",
    "description": "A detailed template prompt for Nano Banana 2 to generate an image of a family restaurant collaboration menu based on a provided character image and settings. The prompt specifies the output format, st...",
    "prompt": "[Character Settings]\n- Character Name: [{argument name=\"Character Name\" default=\"\"}] ← Only fill this in. The following are optional\n- Color/Appearance Features: [{argument name=\"Color/Appearance Features\" default=\"\"}]\n- Personality/Catchphrases/Behavior Patterns: [{argument name=\"Personality/Catchphrases/Behavior Patterns\" default=\"\"}]\n- Worldview/Affiliation/Setting: [{argument name=\"Worldview/Affiliation/Setting\" default=\"\"}]\n- Gag/Humor Points: [{argument name=\"Gag/Humor Points\" default=\"\"}]\n* Please freely supplement any blank items by reading the attached image. If the character name is also blank, name it from the image.\n\nCreate a family restaurant collaboration menu for the \"[{argument name=\"Character Name\" default=\"\"}] Fair\" using the above character settings and the attached image.\n\nOutput Format:\nA photo-style image taken from an oblique angle of a glossy booklet menu placed on an actual family restaurant table. The booklet is open to a spread, and the pages have actual food photos, prices, and menu numbers printed on them. Reproduce the texture of the real shooting environment, such as the wood grain of the table, the shadow of the booklet, and reflections.\n\nMenu Content:\n- A logo for the \"[{argument name=\"Character Name\" default=\"\"}] Fair\" at the top of the page (a pop red x yellow x white color scheme that stimulates appetite)\n- Match the character representation within the menu pages to the style of the attached image: if the attachment is illustration/anime style, use an illustration; if it is live-action/photo style, use a photo of a real person. In both cases, faithfully reflect the attached visual. Choose one pose randomly from the following: ① Presenting a tray with both hands ② Pointing and promoting a dish ③ Posing with a guts pose in an apron ④ Running while carrying food ⑤ Leaning over the table and whispering a recommendation\n- Devise 3 original menu items based on the character settings above. Directly reflect the character's appearance, catchphrases, and gags in the dish names and descriptions. Include the dish name, description, price (tax included), and menu number for each item.\n- Place \"Limited Time\" and \"Limited Quantity\" banners on the page.\n\nHorizontal spread layout (character x menu introduction on the left page, food photo x price list on the right page).",
    "images": [
      "https://cms-assets.youmind.com/media/1774334473395_7zuq71_HEFSSXEaQAAq8T8.jpg",
      "https://cms-assets.youmind.com/media/1774334473644_cvpl6k_HEFSY_9awAAJ7rQ.jpg",
      "https://cms-assets.youmind.com/media/1774334474010_3nxxcw_HEFSWdjacAEpMwd.jpg",
      "https://cms-assets.youmind.com/media/1774334474653_8s9vl3_HEFSZ5TbAAAYScp.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "JA",
    "featured": false,
    "raycast": true
  },
  {
    "id": 99,
    "title": "E-commerce Main Image - KNIGHT MECHA GIRL Figure Concept",
    "description": "A detailed description used to generate an image of a 'KNIGHT MECHA GIRL' figure concept, specifying the series name, scale, and the complexity of combining figure and runner parts.",
    "prompt": "KNIGHT MECHA GIRL\nRe : No.2 Vorstraß Einheit\n⠀\n1/7 scale figure\n⠀\nFigure?\nPlastic model?\nIt's difficult to reconcile assembled parts and runners....",
    "images": [
      "https://cms-assets.youmind.com/media/1774334470552_jusez3_HEEkk-obUAAKzEr.jpg",
      "https://cms-assets.youmind.com/media/1774334470544_fpv1gw_HEEklYGaoAAx_65.jpg",
      "https://cms-assets.youmind.com/media/1774334470603_tsjasm_HEEklt7aIAAFbez.jpg",
      "https://cms-assets.youmind.com/media/1774334471449_denfg0_HEEkmB_a0AAnRZ7.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 100,
    "title": "E-commerce Main Image - Noir Techcore Product Photography Prompt for Nano Banana Pro",
    "description": "A highly structured, detailed prompt designed for Nano Banana Pro to generate hyper-realistic, noir techcore product photography. It specifies strict composition rules, dramatic rim lighting with oran...",
    "prompt": "{\n  \"image_generation_request\": {\n    \"subject_configuration\": {\n      \"placeholder\": \"{argument name=\\\"product name\\\" default=\\\"[INSERT_PRODUCT_HERE]\\\"}\",\n      \"positioning\": \"strictly_centered\",\n      \"presentation\": \"levitating_in_void\",\n      \"composition_rules\": [\n        \"entire_product_visible\",\n        \"no_cropping\",\n        \"zero_edge_clipping\",\n        \"subject_must_be_contained_within_frame_safety_margins\"\n      ]\n    },\n    \"environment_and_lighting\": {\n      \"background_color\": \"#000000\",\n      \"lighting_style\": \"dramatic_rim_lighting\",\n      \"primary_glow_color\": \"{argument name=\\\"primary glow color\\\" default=\\\"#FF4500\\\"}\",\n      \"accent_lighting\": \"mechanical_internal_luminescence\",\n      \"surface_textures\": [\n        \"anodized_black_metal\",\n        \"iridescent_glass_reflections\",\n        \"crystalline_transparency\",\n        \"carbon_fiber_matte\"\n      ]\n    },\n    \"visual_effects\": {\n      \"style_blend\": \"Hyper-realistic_Industrial_Design\",\n      \"mechanical_detail\": \"macro_lens_precision\",\n      \"atmosphere\": \"clean_vacuum_void\"\n    },\n    \"negative_constraints\": {\n      \"prohibited_elements\": [\n        \"text\",\n        \"typography\",\n        \"logos\",\n        \"watermarks\",\n        \"pedestals\",\n        \"stands\",\n        \"mounting_brackets\",\n        \"visible_light_boxes\",\n        \"softbox_reflections\",\n        \"studio_props\",\n        \"background_gradients\",\n        \"floor_planes\",\n        \"shadow_casting_on_surfaces\"\n      ],\n      \"framing_errors\": [\n        \"cut_off_edges\",\n        \"zoomed_in\",\n        \"partial_view\",\n        \"off-center\"\n      ]\n    },\n    \"color_palette_specification\": {\n      \"base\": \"#000000\",\n      \"highlight_orange\": \"#FF5E00\",\n      \"amber_glow\": \"#CC4400\",\n      \"steel_accent\": \"#A8A8A8\"\n    }\n  }\n}",
    "images": [
      "https://cms-assets.youmind.com/media/1774334476798_722pxn_HEBnGyZXEAIIs5x.jpg"
    ],
    "tags": [
      "photography",
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 101,
    "title": "E-commerce Main Image - Eco-Luxury Skincare Product Photography",
    "description": "A prompt for Nano Banana Pro to generate high-end commercial product photography of a hydrating gel cream jar. The setup is a studio/nature hybrid, featuring the jar on moss-covered tree branches, sur...",
    "prompt": "High-end commercial skincare product photography of a hydrating gel cream jar with minimal clean label, placed on natural moss-covered tree branches, surrounded by delicate small flowers and leaves, fresh dewy water droplets on the jar, soft diffused lighting, bright minimal background (white/neutral), organic aesthetic, eco-luxury branding style, shallow depth of field, ultra-detailed textures (glass, moss, bark, petals), calm and refreshing mood, studio + nature hybrid setup, 8K.",
    "images": [
      "https://cms-assets.youmind.com/media/1774248310819_hya8s3_HEBmHGUaAAACTmZ.jpg",
      "https://cms-assets.youmind.com/media/1774248310818_c1700t_HEBmG-lagAA119u.jpg",
      "https://cms-assets.youmind.com/media/1774248310896_53ouos_HEBmG7qacAAFWXJ.jpg",
      "https://cms-assets.youmind.com/media/1774248311593_dhz7no_HEBmHL0aYAAJU7a.jpg"
    ],
    "tags": [
      "photography",
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 102,
    "title": "E-commerce Main Image - Eco-Friendly Skincare Product Photography",
    "description": "A prompt for Gemini Nano Banana Pro to generate high-end product photography of a minimalist frosted glass skincare bottle in a serene natural setting, emphasizing a clean aesthetic, sustainability br...",
    "prompt": "Eco-Friendly Skincare Product “Minimalist skincare bottle made of frosted glass, placed in a serene natural setting with flowing water, green leaves, and soft sunlight rays, clean aesthetic inspired by The Body Shop, sustainability-focused branding, soft pastel tones, high-end product photography, calm and pure atmosphere”",
    "images": [
      "https://cms-assets.youmind.com/media/1774248298685_r8yenq_HD_XzJ-boAACphi.jpg",
      "https://cms-assets.youmind.com/media/1774248298687_qn2aeb_HD_XzKAbYAAoOCF.jpg"
    ],
    "tags": [
      "photography",
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 103,
    "title": "E-commerce Main Image - Commercial Perfume Photography Prompt for Nano Banana Pro",
    "description": "A detailed prompt for Nano Banana Pro focusing on ultra-realistic commercial product photography of a perfume bottle. The prompt specifies the color palette (monochromatic purple), geometric architect...",
    "prompt": "Ultra-realistic commercial product photography of a “{argument name=\"perfume name\" default=\"Mystic Eau De Parfum\"}” perfume bottle filled with translucent violet liquid, the round glass bottle centered and placed on a soft pastel surface with the metallic cap set beside it, surrounded by a minimal architectural setup of smooth lavender and white geometric arches and stepped platforms, delicate purple lilac flowers arranged around and above the scene adding a natural botanical touch, a subtle mist spray visible in the air near the bottle suggesting fragrance diffusion, monochromatic purple color palette with soft gradients in the background, clean studio environment with elegant symmetry, soft diffused lighting creating gentle shadows and smooth reflections on the glass surface, balanced composition with the product as the focal point and background elements slightly softened, high-end beauty advertising aesthetic emphasizing elegance and calm luxury, high detail, realistic textures, professional photography, high resolution, sharp focus.",
    "images": [
      "https://cms-assets.youmind.com/media/1774074509909_1y38mr_HD3tOGHacAAeZQr.jpg",
      "https://cms-assets.youmind.com/media/1774074510203_uz8rwf_HD3tOExboAIyvsv.jpg",
      "https://cms-assets.youmind.com/media/1774074510209_rdpxgx_HD3tN6VboAM1CKH.jpg"
    ],
    "tags": [
      "photography"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 104,
    "title": "E-commerce Main Image - Nano Banana 2 Grid Photo Generation Prompt",
    "description": "A prompt for Nano Banana 2 to generate a 3x3 grid of product promotion photos, maintaining the product, person, style, and mood across all nine images.",
    "prompt": "Please create a 3x3 grid of product promotion photos.\nPlease maintain the product, person, style, and mood.",
    "images": [
      "https://cms-assets.youmind.com/media/1774074543601_2j5qej_HD23SUHboAAGtNg.jpg",
      "https://cms-assets.youmind.com/media/1774074543937_mazs5z_HD232zcboAcPRDA.jpg",
      "https://cms-assets.youmind.com/media/1774074544026_8iqkt9_HD231Q_boAACG1k.jpg",
      "https://cms-assets.youmind.com/media/1774074544726_z4h4pg_HD234k9boAkUHla.jpg"
    ],
    "tags": [
      "photography"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 105,
    "title": "E-commerce Main Image - Hyper-Realistic Beverage Product Shot Prompts for Nano Banana Pro",
    "description": "Two separate prompts for Gemini Nano Banana Pro, both focused on generating hyper-realistic commercial product shots of a pink dessert-themed beverage can (Creamy Shake Stout). The prompts detail dyna...",
    "prompt": "Prompt 1:\n\nA hyper-realistic product shot of a pink dessert-themed beverage can labeled “Creamy Shake Stout”, covered in glossy dripping strawberry cream. The can is surrounded by splashing pink milk, floating chocolate sandwich cookies, fresh strawberries, and whipped cream. Soft pastel pink background, studio lighting, high-speed splash photography, ultra-detailed textures, reflections on liquid surface, cinematic depth of field, 8K, commercial advertising style.\n\nPrompt 2:\n\nA premium product advertisement of a pink can labeled “Creamy Cheesecake Shake Stout”, topped with thick dripping strawberry glaze. Dynamic splash of pink milk around the base, with floating cookies, chocolate chunks, and fresh strawberries in mid-air. Minimal pastel pink background, soft diffused lighting, high detail, glossy reflections, macro lens effect, cinematic composition, ultra-realistic, 8K, luxury food photography style.",
    "images": [
      "https://cms-assets.youmind.com/media/1774074534296_hpavwc_HD2BkiBb0AAgkYG.jpg",
      "https://cms-assets.youmind.com/media/1774074534341_n8xhpz_HD2BkiWboAIFdB1.jpg"
    ],
    "tags": [
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 106,
    "title": "E-commerce Main Image - Low-Key Product Photography Prompt for Gemini Nano Banana Pro",
    "description": "A highly specific prompt for Gemini Nano Banana Pro, instructing it to recreate an uploaded product image in a low-key studio photography style. The prompt details cinematic lighting, strong contrast,...",
    "prompt": "Use the uploaded product image as the reference. Recreate the same product in a low-key studio photography style. Low-key studio shot of the product placed on a solid surface. The product is physically resting on the surface, with a subtle contact shadow directly underneath. Single dramatic spotlight as the only light source. Dark matte background, seamless studio setup. Create strong contrast, rich blacks, and selective illumination focused on the product’s key features. Lighting is cinematic, revealing form, depth, and material through light and shadow. Mood: mysterious, premium, luxury product photography. Photorealistic result with natural grounding and realistic light falloff.",
    "images": [
      "https://cms-assets.youmind.com/media/1774074509349_9ltcxf_HD0IrLSbwAAIZs7.jpg",
      "https://cms-assets.youmind.com/media/1774074509076_vvb8ch_HD0IrLlboAATFU3.jpg",
      "https://cms-assets.youmind.com/media/1774074509341_3bz49i_HD0IrMWboAINJXq.jpg",
      "https://cms-assets.youmind.com/media/1774074510227_r92cai_HD0IrN8aEAAzh21.jpg"
    ],
    "tags": [
      "photography",
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 107,
    "title": "E-commerce Main Image - Luxury Skincare Still Life Prompt for Nano Banana Pro",
    "description": "A detailed prompt for generating a high-end, ultra-realistic still life image of a luxury skincare product (NEEDLY Cicachid relief cream) using Nano Banana Pro, emphasizing soft natural lighting, glas...",
    "prompt": "A luxury skincare product still life, centered composition. A small matte green glass jar labeled “{argument name=\"product name\" default=\"NEEDLY Cicachid relief cream\"}” with a clean white lid sits in the middle on a soft beige background. Surrounding the jar are multiple transparent glass spheres of varying sizes, filled with water, air bubbles, and small green botanical leaves suspended inside.\nThe spheres create magnified distortions of the leaves and reflections. Soft natural sunlight shines from the upper left, casting warm highlights and elongated soft shadows across the surface. The lighting is bright, airy, and slightly golden, creating a premium, organic skincare aesthetic.\nThe arrangement is artistic and minimal, with overlapping circular forms and subtle reflections. The color palette is neutral beige, soft greens, and warm highlights. The surface is clean and matte, enhancing the glossy transparency of the glass spheres.\nMacro photography style, shallow depth of field, high detail, editorial beauty campaign, ultra-realistic, 4K quality.",
    "images": [
      "https://cms-assets.youmind.com/media/1773988992404_txqku7_HDyjWnLbIAAC42u.jpg"
    ],
    "tags": [
      "general"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 108,
    "title": "E-commerce Main Image - Minimalist Food Illustration and Photorealism Blend",
    "description": "A prompt for generating a minimal studio shot featuring real food seamlessly transitioning into a clean black line illustration, printed directly onto paper packaging. This creates a modern minimal br...",
    "prompt": "minimal studio shot on pure white background, real {argument name=\"food name\" default=\"Food Name\"} emerging from a paper packaging, the visible part outside the packaging is fully photorealistic, the continuation of the same food is drawn as a clean black line illustration printed directly on the surface of the packaging, perfectly aligned with the real food shape, the illustration stays strictly on the packaging material, not floating, not extending into the background, seamless transition between real and printed illustration, modern minimal branding, top-down composition, soft shadows.",
    "images": [
      "https://cms-assets.youmind.com/media/1773989000441_ef5wm6_HDyE_U_a8AA5UTu.jpg",
      "https://cms-assets.youmind.com/media/1773989000499_1uhwua_HDyE_HEbkAAyEey.jpg",
      "https://cms-assets.youmind.com/media/1773989000648_r5ywi3_HDyE_U_aUAAws2n.jpg",
      "https://cms-assets.youmind.com/media/1773989001028_a0b3vp_HDyE_X0bgAEO7AX.jpg"
    ],
    "tags": [
      "photography"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 109,
    "title": "E-commerce Main Image - High-Energy Smoothie Product Shot",
    "description": "A prompt for Nano Banana Pro to generate a commercial-style, high-energy product shot of a 'Power Berry' smoothie. It specifies dynamic action (exploding splash), floating ingredients, dramatic neon l...",
    "prompt": "High-energy product shot of a vibrant berry smoothie in a glass jar labeled “{argument name=\"label\" default=\"Power Berry\"},” exploding with dynamic splash, surrounded by floating raspberries, blueberries, and blackberries mid-air, thick creamy liquid bursting upward, dramatic neon lighting with purple and red tones, glossy reflections and droplets, dark cinematic background with subtle bokeh, modern fitness/lifestyle vibe with a blurred smartphone in background, ultra-detailed textures, commercial beverage advertisement style, 8K",
    "images": [
      "https://cms-assets.youmind.com/media/1773989006869_3s5jb0_HDw1OCNacAAbqhq.jpg",
      "https://cms-assets.youmind.com/media/1773989007046_4kuuh3_HDw1OC5bIAAvIo6.jpg",
      "https://cms-assets.youmind.com/media/1773989007023_nquoq1_HDw1iP3b0AA9grP.jpg",
      "https://cms-assets.youmind.com/media/1773989007877_cz3l3e_HDw1ODYakAAVsxr.jpg"
    ],
    "tags": [
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 110,
    "title": "E-commerce Main Image - Minimalist Luxury Product Photography Prompts",
    "description": "Two detailed prompts for generating high-end, minimalist luxury product photography shots of a collagen supplement jar, emphasizing specific backgrounds, lighting (warm sunlight/studio), and surroundi...",
    "prompt": "Prompt 1:\n\nMinimalist luxury product photography of a collagen supplement jar placed on a soft pastel peach background, cylindrical pedestal base, surrounded by fresh pineapple and sliced grapefruit, a small glass cup with golden liquid in front, warm sunlight casting soft palm leaf shadows, clean aesthetic, high-end skincare branding, soft diffused lighting, realistic textures, subtle reflections, shallow depth of field, editorial style, 4k, ultra-detailed.\n\nPrompt 2:\nPremium skincare product shot of a white collagen cream jar with metallic lid on a round pedestal, tropical fruits (pineapple and grapefruit slices) arranged around, a glass cup filled with amber liquid, peach monochrome background with palm shadow overlay, soft warm lighting, minimal composition, luxury beauty advertisement style, smooth gradients, high realism, sharp focus, studio lighting, 4k resolution.",
    "images": [
      "https://cms-assets.youmind.com/media/1773902657481_as7uto_HDrv268a4AASFat.jpg",
      "https://cms-assets.youmind.com/media/1773902657412_2oeack_HDrv27Fa8AArXh_.jpg"
    ],
    "tags": [
      "photography",
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 111,
    "title": "E-commerce Main Image - Product Advertisement Prompts for Nano Banana Pro on Gemini",
    "description": "Three separate prompts for Nano Banana Pro, designed to generate hyper-realistic commercial product advertisements for different beverages: a Protein Shake (banana/almond), Grape Soda, and an Energy D...",
    "prompt": "Protein Shake (Banana + Almond)\nPrompt:\nHyper-realistic product advertisement of a protein shake can with yellow and cream design, surrounded by floating banana slices, almonds, and peanuts, dynamic milk splash bursting around the can, glossy condensation droplets on surface, vibrant warm yellow background, high-speed splash photography, ultra-detailed textures, commercial food photography style, dramatic lighting, 8K.\n\n Grape Soda (Purple Splash)\nPrompt:\nPremium soda can in deep black and purple theme, surrounded by fresh grapes, mint leaves, and citrus slice, explosive purple liquid splash frozen mid-air, glossy reflections and water droplets on can, dark moody background with neon highlights, cinematic lighting, ultra-realistic product photography, high contrast, 8K.\n\nEnergy Drink (Pomegranate Splash)\nPrompt:\nVibrant red energy drink can bursting open with juicy pomegranate seeds and slices flying outward, dynamic red liquid splash, fresh green leaves adding contrast, glossy wet surface with condensation, bold red gradient background, high-speed action capture, commercial beverage ad style, ultra-detailed, 8K.",
    "images": [
      "https://cms-assets.youmind.com/media/1773902665512_friijp_HDq3LuhbEAAvJ2m.jpg",
      "https://cms-assets.youmind.com/media/1773902665495_9nbf3k_HDq3LuvbAAAAyDB.jpg",
      "https://cms-assets.youmind.com/media/1773902665618_q8v5nw_HDq3LukbAAAvpTm.jpg"
    ],
    "tags": [
      "product"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 112,
    "title": "Game Asset - 3D Chibi Sticker Set with Customizable Jacket Color",
    "description": "A prompt for generating a set of 3D chibi-style cartoon stickers featuring the same character in various emotions and poses. It specifies a Pixar/Disney 3D render style, soft lighting, and a clean whi...",
    "prompt": "A cute 3D chibi-style cartoon sticker set featuring the same character in various emotions and poses (use the uploaded face as reference). Shiny, expressive eyes; soft round face; slightly oversized head; small body proportions. Wearing a leather jacket {argument name=\"jacket color\" default=\"Blue\"} over a white top. Each pose shows a different expression: surprised, sad, confused, happy, thinking, winking, peace sign, shrugging, playing guitar. 3D render inspired by Pixar/Disney, smooth plastic-like texture, soft lighting, pastel beige background. Clean white sticker outline around each character, minimal aesthetic, highly detailed, ultra cute, emoji-like expressions, high resolution, studio quality.",
    "images": [
      "https://cms-assets.youmind.com/media/1774508270023_zi6nqo_HERCcxwa0AApvnL.jpg"
    ],
    "tags": [
      "3d-render",
      "game-asset"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 113,
    "title": "Game Asset - Bat Cowl Protocol Character Prompt",
    "description": "A complex prompt for Nano Banana (or Gemini Nano Banana) to generate a high-quality 3D render of a designer toy character, integrating a custom 'Bat Cowl' from a reference image onto the character whi...",
    "prompt": "A high-quality 3D render of the designer toy from [Reference Image 1]. Requirement: The character must retain its exact original outfit . The Mask: Tightly fit a custom \"Bat Cowl\" ([Reference Image 2]) over the head.\n\nThe Cowl: Must match the exact color, material, and design, with size adjusted as needed to fit the reference character’s head.\nScaling: Tailored, bespoke fit with a shortened chin guard precisely following the character's jawline. Cowl size is adjusted to match the reference character exactly. The cowl fits seamlessly, with no gap between the head and the chin guard.\nEars: Only the sharp bat ears are visible; hide original ears, headwears, horn, accessories, hat, helmet entirely.\nThe Cutout: The cowl features a cutout area; through this opening, the underlying part of the reference character must be visible exactly as it is, with no additions, removals, or alterations.\nEyes: Use the exact glowing eye effect from the reference cowl image.\nConstraint: No nose or eyes should be rendered on the cowl or the character's face.\n8k, studio lighting, Background must match the reference character’s background exactly.\nLighting\nLighting should match the reference character’s original light behavior, and the cowl must follow and respond to the same lighting conditions.\nCharacter Likeness Integrity (CRITICAL)\n\nMaintain the exact eye shape, spacing, stylization, patterns, silhouette, and original color palette from the reference.\n\nDo not humanize.\n\nDo not alter anatomy.\n\nDo not modify facial structure.\n\nIdentity must remain instantly recognizable.\n\nIf the character wears a balaclava, mask, helmet, or covered face, don't invent facial anatomy.\nNo added nose.\n\nNo added mouth.\n\nNo visible skin where the reference does not show it.",
    "images": [
      "https://cms-assets.youmind.com/media/1774421473775_ksdvy8_HELkjkWaIAEqNjn.jpg"
    ],
    "tags": [
      "game-asset"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 114,
    "title": "Game Asset - Ghibli x Game of Thrones Character Prompts",
    "description": "Two prompts for Nano Banana 2 to create images combining the Ghibli art style with Game of Thrones characters. The first prompt uses a reference image for character turnaround, and the second creates ...",
    "prompt": "use the character turnaround format from [img1] to create {argument name=\"character name\" default=\"[character name]\"} in the same style\n\nprompt: show them in a scene together, ghibli style",
    "images": [
      "https://cms-assets.youmind.com/media/1774421471118_rl8213_HELYuInaIAAyGXq.jpg",
      "https://cms-assets.youmind.com/media/1774421471100_b01qaz_HELYvBoaYAAXP92.jpg",
      "https://cms-assets.youmind.com/media/1774421471902_o1f0xj_HELYvcOaIAQlMGh.jpg",
      "https://cms-assets.youmind.com/media/1774421472593_ahmh5e_HELYukGa8AAp93X.jpg"
    ],
    "tags": [
      "game-asset"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 115,
    "title": "Game Asset - Full Armor Mecha Girl model kit concept prompt",
    "description": "A prompt used with Nano Banana Pro to generate an image concept for a 1/7 scale plastic model kit of a 'Full Armor Mecha Girl' (FAMG-001 Aurelith). The design incorporates a 'Jingasa' (samurai hat) im...",
    "prompt": "Full Armor Mecha Girl\nFAMG-001 Aurelith\n⠀\n1/7 scale plastic model\n⠀\nThe head is inspired by a \"Jingasa\" (samurai hat).\nIt was created using a derived prompt from 'Warrior Mecha Girl' → 'Knight Mecha Girl'.",
    "images": [
      "https://cms-assets.youmind.com/media/1774421492146_rit34b_HEJ5GIFbgAEmCj5.jpg",
      "https://cms-assets.youmind.com/media/1774421492122_6xhco9_HEJ5FxAawAAIBYu.jpg",
      "https://cms-assets.youmind.com/media/1774421492159_5bg2n0_HEJ5G89aIAEpTJC.jpg",
      "https://cms-assets.youmind.com/media/1774421492905_sgitw8_HEJ5HkIaIAIQ1kd.jpg"
    ],
    "tags": [
      "game-asset"
    ],
    "language": "JA",
    "featured": false,
    "raycast": false
  },
  {
    "id": 116,
    "title": "Game Asset - Ghibli Nezha Character Turnaround",
    "description": "A prompt specifically designed for Nano Banana 2 to create a character turnaround sheet for Nezha in the style of Studio Ghibli, referencing an external image for the format.",
    "prompt": "use the character turnaround format from [img1] to create {argument name=\"character name\" default=\"Nezha\"} in the same style",
    "images": [
      "https://cms-assets.youmind.com/media/1774334468457_ak1pxl_HEFSAOWbkAAK4k5.jpg"
    ],
    "tags": [
      "game-asset"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 117,
    "title": "Game Asset - Pixelated Cartoon Animal Image",
    "description": "A simple template prompt for Nano Banana 2 to generate a pixelated image of a cartoon animal, allowing the user to specify the animal name.",
    "prompt": "A cartoonish ({argument name=\"animal name\" default=\"Animal Name\"}) in pixelated image format",
    "images": [
      "https://cms-assets.youmind.com/media/1774248304087_ep0gnw_HEBelWzbgAAHj9M.jpg",
      "https://cms-assets.youmind.com/media/1774248304022_kdsh8g_HEBelWvaUAADeKy.jpg",
      "https://cms-assets.youmind.com/media/1774248304096_krlw8f_HEBelWwbwAAR_CM.jpg",
      "https://cms-assets.youmind.com/media/1774248305128_vi87d1_HEBelWwasAELUlw.jpg"
    ],
    "tags": [
      "game-asset"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 118,
    "title": "Game Asset - Ghibli-Inspired Character Turnaround",
    "description": "A prompt for Nano Banana 2 requesting the generation of Ghibli-inspired anime characters using a character turnaround format based on a provided reference image.",
    "prompt": "use the character turnaround format from [img1] to create {argument name=\"character description\" default=\"[character name / image]\"} in the same style",
    "images": [
      "https://cms-assets.youmind.com/media/1774248302388_yswdlf_HEBTelTaYAAAp1j.jpg",
      "https://cms-assets.youmind.com/media/1774248302420_ka4a8k_HEBTbrAXwAElna2.jpg",
      "https://cms-assets.youmind.com/media/1774248302476_0vq0fv_HEBTdH7XMAA-WLQ.jpg",
      "https://cms-assets.youmind.com/media/1774248303089_5pp284_HEBTf5TbMAABA60.jpg"
    ],
    "tags": [
      "game-asset"
    ],
    "language": "EN",
    "featured": false,
    "raycast": true
  },
  {
    "id": 119,
    "title": "Game Asset - Nano Banana Pro Prompt: 8-bit Chicken in T-Rex Costume",
    "description": "A prompt used with Nano Banana Pro (Gemini 3.1 image generator) to create an 8-bit style image of a chicken wearing a T-Rex costume on its way home.",
    "prompt": "a chicken in a T-Rex costume's on the way of homecoming in the style of an 8-bits #11",
    "images": [
      "https://cms-assets.youmind.com/media/1774161444356_j9reqr_HDluvD2bMAAC6B5.jpg"
    ],
    "tags": [
      "game-asset"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 120,
    "title": "Game Asset - LMGT3-Class Car Inspired Sea Iguana",
    "description": "A prompt for Nano Banana Pro (Gemini 3.1 image generator) to create an image of a sea iguana inspired by an LMGT3-class race car.",
    "prompt": "a sea iguana that is inspired by a LMGT3-class car",
    "images": [
      "https://cms-assets.youmind.com/media/1774161441124_7hcp7r_HDlh96ebgAAHygE.jpg"
    ],
    "tags": [
      "game-asset"
    ],
    "language": "EN",
    "featured": false,
    "raycast": false
  },
  {
    "id": 121,
    "title": "One Pager - 盘面实战：情绪分化下的选股与仓位管理",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a stock market / trading session infographic optimized for MOBILE (9:16):\n\nInspired by financial dashboards and trading desk summaries.\n\nMeetin",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/01_%E7%9B%98%E9%9D%A2%E5%AE%9E%E6%88%98%EF%BC%9A%E6%83%85%E7%BB%AA%E5%88%86%E5%8C%96%E4%B8%8B%E7%9A%84%E9%80%89%E8%82%A1%E4%B8%8E%E4%BB%93%E4%BD%8D%E7%AE%A1%E7%90%86.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 122,
    "title": "One Pager - iOS上架、硬件连通与候选人面试详谈",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a job interview / HR meeting summary infographic for MOBILE (9:16):\n\nMeeting Content:\nTitle: iOS上架、硬件连通与候选人面试详谈\n\n# iOS上架、硬件连通与候选人面试详谈\n\n## 会议概览",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/02_iOS%E4%B8%8A%E6%9E%B6%E3%80%81%E7%A1%AC%E4%BB%B6%E8%BF%9E%E9%80%9A%E4%B8%8E%E5%80%99%E9%80%89%E4%BA%BA%E9%9D%A2%E8%AF%95%E8%AF%A6%E8%B0%88.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 123,
    "title": "One Pager - 地缘冲突下的A股盘面解读与可操作方向",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a stock market / trading session infographic optimized for MOBILE (9:16):\n\nInspired by financial dashboards and trading desk summaries.\n\nMeetin",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/03_%E5%9C%B0%E7%BC%98%E5%86%B2%E7%AA%81%E4%B8%8B%E7%9A%84A%E8%82%A1%E7%9B%98%E9%9D%A2%E8%A7%A3%E8%AF%BB%E4%B8%8E%E5%8F%AF%E6%93%8D%E4%BD%9C%E6%96%B9%E5%90%91.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 124,
    "title": "One Pager - 存储、供应与音频调校：量产决策会",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a hardware product / startup build meeting infographic for MOBILE (9:16):\n\nMeeting Content:\nTitle: 存储、供应与音频调校：量产决策会\n\n# 存储、供应与音频调校：量产决策会\n\n## 会议背",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/04_%E5%AD%98%E5%82%A8%E3%80%81%E4%BE%9B%E5%BA%94%E4%B8%8E%E9%9F%B3%E9%A2%91%E8%B0%83%E6%A0%A1%EF%BC%9A%E9%87%8F%E4%BA%A7%E5%86%B3%E7%AD%96%E4%BC%9A.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 125,
    "title": "One Pager - 资深产品人面谈：从硬件到AI的复盘与创业意向",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a job interview / HR meeting summary infographic for MOBILE (9:16):\n\nMeeting Content:\nTitle: 资深产品人面谈：从硬件到AI的复盘与创业意向\n\n# 资深产品人面谈：从硬件到AI的复盘与创业意向",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/05_%E8%B5%84%E6%B7%B1%E4%BA%A7%E5%93%81%E4%BA%BA%E9%9D%A2%E8%B0%88%EF%BC%9A%E4%BB%8E%E7%A1%AC%E4%BB%B6%E5%88%B0AI%E7%9A%84%E5%A4%8D%E7%9B%98%E4%B8%8E%E5%88%9B%E4%B8%9A%E6%84%8F%E5%90%91.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 126,
    "title": "One Pager - 英语课堂：词义讲解与练习片段",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate an education / tutoring session infographic for MOBILE (9:16):\n\nInspired by chalkboard-style teacher explainers and study plan visuals.\n\nMeetin",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/06_%E8%8B%B1%E8%AF%AD%E8%AF%BE%E5%A0%82%EF%BC%9A%E8%AF%8D%E4%B9%89%E8%AE%B2%E8%A7%A3%E4%B8%8E%E7%BB%83%E4%B9%A0%E7%89%87%E6%AE%B5.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 127,
    "title": "One Pager - CAT4模考辅导：图形推理与词汇现场训练",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate an education / tutoring session infographic for MOBILE (9:16):\n\nInspired by chalkboard-style teacher explainers and study plan visuals.\n\nMeetin",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/07_CAT4%E6%A8%A1%E8%80%83%E8%BE%85%E5%AF%BC%EF%BC%9A%E5%9B%BE%E5%BD%A2%E6%8E%A8%E7%90%86%E4%B8%8E%E8%AF%8D%E6%B1%87%E7%8E%B0%E5%9C%BA%E8%AE%AD%E7%BB%83.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 128,
    "title": "One Pager - CDNIS Interview Coaching for Angela",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate an education / tutoring session infographic for MOBILE (9:16):\n\nInspired by chalkboard-style teacher explainers and study plan visuals.\n\nMeetin",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/08_CDNIS%20Interview%20Coaching%20for%20Angela.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 129,
    "title": "One Pager - 简短语音录入：数字串与一句“后续是吧？”",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a personal daily summary / reflection infographic for MOBILE (9:16):\n\nInspired by Notion daily notes, bullet journal aesthetics, and personal p",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/09_%E7%AE%80%E7%9F%AD%E8%AF%AD%E9%9F%B3%E5%BD%95%E5%85%A5%EF%BC%9A%E6%95%B0%E5%AD%97%E4%B8%B2%E4%B8%8E%E4%B8%80%E5%8F%A5%E2%80%9C%E5%90%8E%E7%BB%AD%E6%98%AF%E5%90%A7%EF%BC%9F%E2%80%9D.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 130,
    "title": "One Pager - 朗读数字：一到二十",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate an education / tutoring session infographic for MOBILE (9:16):\n\nInspired by chalkboard-style teacher explainers and study plan visuals.\n\nMeetin",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/10_%E6%9C%97%E8%AF%BB%E6%95%B0%E5%AD%97%EF%BC%9A%E4%B8%80%E5%88%B0%E4%BA%8C%E5%8D%81.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 131,
    "title": "One Pager - 从品牌内容到量产节点：一次产品上市前的全面倒推会议",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a brand strategy / marketing planning infographic for MOBILE (9:16):\n\nInspired by startup launch decks and product marketing one-pagers.\n\nMeeti",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/11_%E4%BB%8E%E5%93%81%E7%89%8C%E5%86%85%E5%AE%B9%E5%88%B0%E9%87%8F%E4%BA%A7%E8%8A%82%E7%82%B9%EF%BC%9A%E4%B8%80%E6%AC%A1%E4%BA%A7%E5%93%81%E4%B8%8A%E5%B8%82%E5%89%8D%E7%9A%84%E5%85%A8%E9%9D%A2%E5%80%92%E6%8E%A8%E4%BC%9A%E8%AE%AE.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 132,
    "title": "One Pager - 官网改版策略会：把产品画面与“丝滑”体验放在首位",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a brand strategy / marketing planning infographic for MOBILE (9:16):\n\nInspired by startup launch decks and product marketing one-pagers.\n\nMeeti",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/12_%E5%AE%98%E7%BD%91%E6%94%B9%E7%89%88%E7%AD%96%E7%95%A5%E4%BC%9A%EF%BC%9A%E6%8A%8A%E4%BA%A7%E5%93%81%E7%94%BB%E9%9D%A2%E4%B8%8E%E2%80%9C%E4%B8%9D%E6%BB%91%E2%80%9D%E4%BD%93%E9%AA%8C%E6%94%BE%E5%9C%A8%E9%A6%96%E4%BD%8D.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 133,
    "title": "One Pager - 候选人Catherine与创业者关于职业与AI的深入对话",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a job interview / HR meeting summary infographic for MOBILE (9:16):\n\nMeeting Content:\nTitle: 候选人Catherine与创业者关于职业与AI的深入对话\n\n# 候选人Catherine与创业者关于",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/13_%E5%80%99%E9%80%89%E4%BA%BACatherine%E4%B8%8E%E5%88%9B%E4%B8%9A%E8%80%85%E5%85%B3%E4%BA%8E%E8%81%8C%E4%B8%9A%E4%B8%8EAI%E7%9A%84%E6%B7%B1%E5%85%A5%E5%AF%B9%E8%AF%9D.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 134,
    "title": "One Pager - 可穿戴产品防水、测试与上线节奏的决策与风险讨论",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a hardware product / startup build meeting infographic for MOBILE (9:16):\n\nMeeting Content:\nTitle: 可穿戴产品防水、测试与上线节奏的决策与风险讨论\n\n# 可穿戴产品防水、测试与上线节奏的决",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/14_%E5%8F%AF%E7%A9%BF%E6%88%B4%E4%BA%A7%E5%93%81%E9%98%B2%E6%B0%B4%E3%80%81%E6%B5%8B%E8%AF%95%E4%B8%8E%E4%B8%8A%E7%BA%BF%E8%8A%82%E5%A5%8F%E7%9A%84%E5%86%B3%E7%AD%96%E4%B8%8E%E9%A3%8E%E9%99%A9%E8%AE%A8%E8%AE%BA.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 135,
    "title": "One Pager - 产品为先：从获客成本到量产风险的全员同步会",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a hardware product / startup build meeting infographic for MOBILE (9:16):\n\nMeeting Content:\nTitle: 产品为先：从获客成本到量产风险的全员同步会\n\n# 从获客到量产：录音硬件团队的产品、营销",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/15_%E4%BA%A7%E5%93%81%E4%B8%BA%E5%85%88%EF%BC%9A%E4%BB%8E%E8%8E%B7%E5%AE%A2%E6%88%90%E6%9C%AC%E5%88%B0%E9%87%8F%E4%BA%A7%E9%A3%8E%E9%99%A9%E7%9A%84%E5%85%A8%E5%91%98%E5%90%8C%E6%AD%A5%E4%BC%9A.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 136,
    "title": "One Pager - 产品为先：从获客成本到量产风险的全员同步会",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a hardware product / startup build meeting infographic for MOBILE (9:16):\n\nMeeting Content:\nTitle: 产品为先：从获客成本到量产风险的全员同步会\n\n# 产品为先：从获客成本到量产风险的全员同",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/16_%E4%BA%A7%E5%93%81%E4%B8%BA%E5%85%88%EF%BC%9A%E4%BB%8E%E8%8E%B7%E5%AE%A2%E6%88%90%E6%9C%AC%E5%88%B0%E9%87%8F%E4%BA%A7%E9%A3%8E%E9%99%A9%E7%9A%84%E5%85%A8%E5%91%98%E5%90%8C%E6%AD%A5%E4%BC%9A.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 137,
    "title": "One Pager - 转转关停自由市场：二手平台的信任与商业抉择",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate an executive strategy dashboard for MOBILE VERTICAL DISPLAY (9:16):\n\nMeeting Content:\nTitle: 转转关停自由市场：二手平台的信任与商业抉择\n\n# 转转关停自由市场：二手平台的信任与商业抉择\n\n##",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/17_%E8%BD%AC%E8%BD%AC%E5%85%B3%E5%81%9C%E8%87%AA%E7%94%B1%E5%B8%82%E5%9C%BA%EF%BC%9A%E4%BA%8C%E6%89%8B%E5%B9%B3%E5%8F%B0%E7%9A%84%E4%BF%A1%E4%BB%BB%E4%B8%8E%E5%95%86%E4%B8%9A%E6%8A%89%E6%8B%A9.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 138,
    "title": "One Pager - 转转放手C2C：二手市场的信用与商业抉择",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate an executive strategy dashboard for MOBILE VERTICAL DISPLAY (9:16):\n\nMeeting Content:\nTitle: 转转放手C2C：二手市场的信用与商业抉择\n\n# 转转放手C2C：二手市场的信用与商业抉择\n\n## 概",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/18_%E8%BD%AC%E8%BD%AC%E6%94%BE%E6%89%8BC2C%EF%BC%9A%E4%BA%8C%E6%89%8B%E5%B8%82%E5%9C%BA%E7%9A%84%E4%BF%A1%E7%94%A8%E4%B8%8E%E5%95%86%E4%B8%9A%E6%8A%89%E6%8B%A9.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 139,
    "title": "One Pager - 英語補習：醫療詞彙、文法與記憶技巧",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate an education / tutoring session infographic for MOBILE (9:16):\n\nInspired by chalkboard-style teacher explainers and study plan visuals.\n\nMeetin",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/19_%E8%8B%B1%E8%AA%9E%E8%A3%9C%E7%BF%92%EF%BC%9A%E9%86%AB%E7%99%82%E8%A9%9E%E5%BD%99%E3%80%81%E6%96%87%E6%B3%95%E8%88%87%E8%A8%98%E6%86%B6%E6%8A%80%E5%B7%A7.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 140,
    "title": "One Pager - A股短线与机构风格冲突：个股破局与题材轮动解读",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a stock market / trading session infographic optimized for MOBILE (9:16):\n\nInspired by financial dashboards and trading desk summaries.\n\nMeetin",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/20_A%E8%82%A1%E7%9F%AD%E7%BA%BF%E4%B8%8E%E6%9C%BA%E6%9E%84%E9%A3%8E%E6%A0%BC%E5%86%B2%E7%AA%81%EF%BC%9A%E4%B8%AA%E8%82%A1%E7%A0%B4%E5%B1%80%E4%B8%8E%E9%A2%98%E6%9D%90%E8%BD%AE%E5%8A%A8%E8%A7%A3%E8%AF%BB.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 141,
    "title": "One Pager - 讨论设备到 APP 的上传流程与弱网与进度提示",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a system architecture infographic optimized for MOBILE VERTICAL DISPLAY (9:16 portrait):\n\nMeeting Content:\nTitle: 讨论设备到 APP 的上传流程与弱网与进度提示\n\n# 讨论",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/21_%E8%AE%A8%E8%AE%BA%E8%AE%BE%E5%A4%87%E5%88%B0%20APP%20%E7%9A%84%E4%B8%8A%E4%BC%A0%E6%B5%81%E7%A8%8B%E4%B8%8E%E5%BC%B1%E7%BD%91%E4%B8%8E%E8%BF%9B%E5%BA%A6%E6%8F%90%E7%A4%BA.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 142,
    "title": "One Pager - 团队讨论：优化欢迎信与众筹前的邮件投放策略",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a product launch for MOBILE (9:16):\n\nMeeting Content:\nTitle: 团队讨论：优化欢迎信与众筹前的邮件投放策略\n\n# 团队讨论：优化欢迎信与众筹前的邮件投放策略\n\n## 会议目的\n围绕欢迎邮件（Welcome Email Flow）",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/22_%E5%9B%A2%E9%98%9F%E8%AE%A8%E8%AE%BA%EF%BC%9A%E4%BC%98%E5%8C%96%E6%AC%A2%E8%BF%8E%E4%BF%A1%E4%B8%8E%E4%BC%97%E7%AD%B9%E5%89%8D%E7%9A%84%E9%82%AE%E4%BB%B6%E6%8A%95%E6%94%BE%E7%AD%96%E7%95%A5.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 143,
    "title": "One Pager - Team Onboarding, PhD Paths, and AI_Data Access Cha",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate construction project for MOBILE (9:16):\n\nMeeting Content:\nTitle: Team Onboarding, PhD Paths, and AI/Data Access Challenges\n\n# Team Onboarding,",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/23_Team%20Onboarding%2C%20PhD%20Paths%2C%20and%20AI_Data%20Access%20Cha.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 144,
    "title": "One Pager - 用AI提升招聘效率：产品演示与企业会员对比",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate sales funnel for MOBILE (9:16):\n\nMeeting Content:\nTitle: 用AI提升招聘效率：产品演示与企业会员对比\n\n# 用AI提升招聘效率：产品演示与企业会员对比\n\n## 会议概述\n- 目标：梳理当前招聘需求，演示平台AI招聘能力，讨论个人会",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/24_%E7%94%A8AI%E6%8F%90%E5%8D%87%E6%8B%9B%E8%81%98%E6%95%88%E7%8E%87%EF%BC%9A%E4%BA%A7%E5%93%81%E6%BC%94%E7%A4%BA%E4%B8%8E%E4%BC%81%E4%B8%9A%E4%BC%9A%E5%91%98%E5%AF%B9%E6%AF%94.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 145,
    "title": "One Pager - 课堂实录：英语单词、语法与口语俗语教学片段",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate an education / tutoring session infographic for MOBILE (9:16):\n\nInspired by chalkboard-style teacher explainers and study plan visuals.\n\nMeetin",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/25_%E8%AF%BE%E5%A0%82%E5%AE%9E%E5%BD%95%EF%BC%9A%E8%8B%B1%E8%AF%AD%E5%8D%95%E8%AF%8D%E3%80%81%E8%AF%AD%E6%B3%95%E4%B8%8E%E5%8F%A3%E8%AF%AD%E4%BF%97%E8%AF%AD%E6%95%99%E5%AD%A6%E7%89%87%E6%AE%B5.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 146,
    "title": "One Pager - 线上英语口语课堂：词汇、搭配与杂谈",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate an education / tutoring session infographic for MOBILE (9:16):\n\nInspired by chalkboard-style teacher explainers and study plan visuals.\n\nMeetin",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/26_%E7%BA%BF%E4%B8%8A%E8%8B%B1%E8%AF%AD%E5%8F%A3%E8%AF%AD%E8%AF%BE%E5%A0%82%EF%BC%9A%E8%AF%8D%E6%B1%87%E3%80%81%E6%90%AD%E9%85%8D%E4%B8%8E%E6%9D%82%E8%B0%88.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 147,
    "title": "One Pager - 产品推广会议：问卷、官网与投放策略确认",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a product launch for MOBILE (9:16):\n\nMeeting Content:\nTitle: 产品推广会议：问卷、官网与投放策略确认\n\n# 产品推广会议：问卷、官网与投放策略确认\n\n## 会议概述\n- 与会人员：SPK_A、SPK_B、SPK_C\n- 会议主",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/27_%E4%BA%A7%E5%93%81%E6%8E%A8%E5%B9%BF%E4%BC%9A%E8%AE%AE%EF%BC%9A%E9%97%AE%E5%8D%B7%E3%80%81%E5%AE%98%E7%BD%91%E4%B8%8E%E6%8A%95%E6%94%BE%E7%AD%96%E7%95%A5%E7%A1%AE%E8%AE%A4.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 148,
    "title": "One Pager - Startup Brand, Messaging and Go-to-Market Debate",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a brand strategy / marketing planning infographic for MOBILE (9:16):\n\nInspired by startup launch decks and product marketing one-pagers.\n\nMeeti",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/28_Startup%20Brand%2C%20Messaging%20and%20Go-to-Market%20Debate.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 149,
    "title": "One Pager - 把产品做到“能用”，再谈杀手功能与上线节奏",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a hardware product / startup build meeting infographic for MOBILE (9:16):\n\nMeeting Content:\nTitle: 把产品做到“能用”，再谈杀手功能与上线节奏\n\n# 把产品做到“能用”，再谈杀手功能与上线",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/29_%E6%8A%8A%E4%BA%A7%E5%93%81%E5%81%9A%E5%88%B0%E2%80%9C%E8%83%BD%E7%94%A8%E2%80%9D%EF%BC%8C%E5%86%8D%E8%B0%88%E6%9D%80%E6%89%8B%E5%8A%9F%E8%83%BD%E4%B8%8E%E4%B8%8A%E7%BA%BF%E8%8A%82%E5%A5%8F.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 150,
    "title": "One Pager - Shaping MemoCat_ simple messaging, real use cases",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a brand strategy / marketing planning infographic for MOBILE (9:16):\n\nInspired by startup launch decks and product marketing one-pagers.\n\nMeeti",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/30_Shaping%20MemoCat_%20simple%20messaging%2C%20real%20use%20cases.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 151,
    "title": "One Pager - 邮件投递与用户活跃：从促销词到问卷与众筹延期",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a brand strategy / marketing planning infographic for MOBILE (9:16):\n\nInspired by startup launch decks and product marketing one-pagers.\n\nMeeti",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/31_%E9%82%AE%E4%BB%B6%E6%8A%95%E9%80%92%E4%B8%8E%E7%94%A8%E6%88%B7%E6%B4%BB%E8%B7%83%EF%BC%9A%E4%BB%8E%E4%BF%83%E9%94%80%E8%AF%8D%E5%88%B0%E9%97%AE%E5%8D%B7%E4%B8%8E%E4%BC%97%E7%AD%B9%E5%BB%B6%E6%9C%9F.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 152,
    "title": "One Pager - 官网与众筹页讨论：内容、框架与执行分工",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a brand strategy / marketing planning infographic for MOBILE (9:16):\n\nInspired by startup launch decks and product marketing one-pagers.\n\nMeeti",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/32_%E5%AE%98%E7%BD%91%E4%B8%8E%E4%BC%97%E7%AD%B9%E9%A1%B5%E8%AE%A8%E8%AE%BA%EF%BC%9A%E5%86%85%E5%AE%B9%E3%80%81%E6%A1%86%E6%9E%B6%E4%B8%8E%E6%89%A7%E8%A1%8C%E5%88%86%E5%B7%A5.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 153,
    "title": "One Pager - 准备开始录音的简短对话",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/33_%E5%87%86%E5%A4%87%E5%BC%80%E5%A7%8B%E5%BD%95%E9%9F%B3%E7%9A%84%E7%AE%80%E7%9F%AD%E5%AF%B9%E8%AF%9D.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 154,
    "title": "One Pager - 准备开始录音的简短对话",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/34_%E5%87%86%E5%A4%87%E5%BC%80%E5%A7%8B%E5%BD%95%E9%9F%B3%E7%9A%84%E7%AE%80%E7%9F%AD%E5%AF%B9%E8%AF%9D.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 155,
    "title": "One Pager - 可穿戴样机设计：尺寸、露出与量产权衡",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a hardware product / startup build meeting infographic for MOBILE (9:16):\n\nMeeting Content:\nTitle: 可穿戴样机设计：尺寸、露出与量产权衡\n\n# 可穿戴样机设计：尺寸、露出与量产权衡\n\n##",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/35_%E5%8F%AF%E7%A9%BF%E6%88%B4%E6%A0%B7%E6%9C%BA%E8%AE%BE%E8%AE%A1%EF%BC%9A%E5%B0%BA%E5%AF%B8%E3%80%81%E9%9C%B2%E5%87%BA%E4%B8%8E%E9%87%8F%E4%BA%A7%E6%9D%83%E8%A1%A1.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 156,
    "title": "One Pager - 产品与官网升级：聚焦定位、用户细分与降低获客成本",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a brand strategy / marketing planning infographic for MOBILE (9:16):\n\nInspired by startup launch decks and product marketing one-pagers.\n\nMeeti",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/36_%E4%BA%A7%E5%93%81%E4%B8%8E%E5%AE%98%E7%BD%91%E5%8D%87%E7%BA%A7%EF%BC%9A%E8%81%9A%E7%84%A6%E5%AE%9A%E4%BD%8D%E3%80%81%E7%94%A8%E6%88%B7%E7%BB%86%E5%88%86%E4%B8%8E%E9%99%8D%E4%BD%8E%E8%8E%B7%E5%AE%A2%E6%88%90%E6%9C%AC.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 157,
    "title": "One Pager - 产品与官网升级：定位、获客与隐私担忧的周会同步",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a brand strategy / marketing planning infographic for MOBILE (9:16):\n\nInspired by startup launch decks and product marketing one-pagers.\n\nMeeti",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/37_%E4%BA%A7%E5%93%81%E4%B8%8E%E5%AE%98%E7%BD%91%E5%8D%87%E7%BA%A7%EF%BC%9A%E5%AE%9A%E4%BD%8D%E3%80%81%E8%8E%B7%E5%AE%A2%E4%B8%8E%E9%9A%90%E7%A7%81%E6%8B%85%E5%BF%A7%E7%9A%84%E5%91%A8%E4%BC%9A%E5%90%8C%E6%AD%A5.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 158,
    "title": "One Pager - Usability Test_ Interactive Portraits in a Gallery",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a product design for MOBILE (9:16):\n\nMeeting Content:\nTitle: Usability Test: Interactive Portraits in a Gallery Prototype\n\n# Usability Test: In",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/38_Usability%20Test_%20Interactive%20Portraits%20in%20a%20Gallery.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 159,
    "title": "One Pager - Parent Seeks Tutor for Daughter's International Sc",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate an education / tutoring session infographic for MOBILE (9:16):\n\nInspired by chalkboard-style teacher explainers and study plan visuals.\n\nMeetin",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/39_Parent%20Seeks%20Tutor%20for%20Daughter%27s%20International%20Sc.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 160,
    "title": "One Pager - 创品团队深聊：硬件、软件、定位与速度的抉择",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a hardware product / startup build meeting infographic for MOBILE (9:16):\n\nMeeting Content:\nTitle: 创品团队深聊：硬件、软件、定位与速度的抉择\n\n# 创品团队深聊：硬件、软件、定位与速度的",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/40_%E5%88%9B%E5%93%81%E5%9B%A2%E9%98%9F%E6%B7%B1%E8%81%8A%EF%BC%9A%E7%A1%AC%E4%BB%B6%E3%80%81%E8%BD%AF%E4%BB%B6%E3%80%81%E5%AE%9A%E4%BD%8D%E4%B8%8E%E9%80%9F%E5%BA%A6%E7%9A%84%E6%8A%89%E6%8B%A9.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 161,
    "title": "One Pager - 儿童OK镜复查：佩戴情况、干眼与换片建议",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a wellness and health tracking infographic with fresh, energetic design:\n\nMeeting Content:\nTitle: 儿童OK镜复查：佩戴情况、干眼与换片建议\n\n# 儿童OK镜复查：佩戴情况、干眼与换片建议",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/41_%E5%84%BF%E7%AB%A5OK%E9%95%9C%E5%A4%8D%E6%9F%A5%EF%BC%9A%E4%BD%A9%E6%88%B4%E6%83%85%E5%86%B5%E3%80%81%E5%B9%B2%E7%9C%BC%E4%B8%8E%E6%8D%A2%E7%89%87%E5%BB%BA%E8%AE%AE.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 162,
    "title": "One Pager - User testing_ meeting-summarizer app & wearable fe",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a product design for MOBILE (9:16):\n\nMeeting Content:\nTitle: User testing: meeting-summarizer app & wearable feedback\n\n# User testing: meeting-",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/42_User%20testing_%20meeting-summarizer%20app%20%26%20wearable%20fe.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 163,
    "title": "One Pager - Single-Word Name Mention",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/43_Single-Word%20Name%20Mention.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 164,
    "title": "One Pager - 直播对话：猫、食物与反复的点赞口号",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a social gathering event infographic with festive energy:\n\nMeeting Content:\nTitle: 直播对话：猫、食物与反复的点赞口号\n\n# 直播对话：猫、食物与反复的点赞口号\n\n## 概要\n这是一场风格极为松散、充满即",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/44_%E7%9B%B4%E6%92%AD%E5%AF%B9%E8%AF%9D%EF%BC%9A%E7%8C%AB%E3%80%81%E9%A3%9F%E7%89%A9%E4%B8%8E%E5%8F%8D%E5%A4%8D%E7%9A%84%E7%82%B9%E8%B5%9E%E5%8F%A3%E5%8F%B7.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 165,
    "title": "One Pager - 室内攀岩教学直播：技巧、规则与实时互动",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate an educational learning plan infographic with academic style:\n\nMeeting Content:\nTitle: 室内攀岩教学直播：技巧、规则与实时互动\n\n# 室内攀岩教学直播：技巧、规则与实时互动\n\n## 概述\n本次直播围绕",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/45_%E5%AE%A4%E5%86%85%E6%94%80%E5%B2%A9%E6%95%99%E5%AD%A6%E7%9B%B4%E6%92%AD%EF%BC%9A%E6%8A%80%E5%B7%A7%E3%80%81%E8%A7%84%E5%88%99%E4%B8%8E%E5%AE%9E%E6%97%B6%E4%BA%92%E5%8A%A8.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 166,
    "title": "One Pager - 线上线下训练课：教练指导、录音噪声与App总结讨论",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a hardware product / startup build meeting infographic for MOBILE (9:16):\n\nMeeting Content:\nTitle: 线上线下训练课：教练指导、录音噪声与App总结讨论\n\n# 线上线下训练课：教练指导、录音",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/46_%E7%BA%BF%E4%B8%8A%E7%BA%BF%E4%B8%8B%E8%AE%AD%E7%BB%83%E8%AF%BE%EF%BC%9A%E6%95%99%E7%BB%83%E6%8C%87%E5%AF%BC%E3%80%81%E5%BD%95%E9%9F%B3%E5%99%AA%E5%A3%B0%E4%B8%8EApp%E6%80%BB%E7%BB%93%E8%AE%A8%E8%AE%BA.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 167,
    "title": "One Pager - Single-Word Reply Conversation",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/47_Single-Word%20Reply%20Conversation.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 168,
    "title": "One Pager - Single Polite Prompt",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/48_Single%20Polite%20Prompt.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 169,
    "title": "One Pager - Single-word Confirmation",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/49_Single-word%20Confirmation.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 170,
    "title": "One Pager - Single-Word Affirmation",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/50_Single-Word%20Affirmation.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 171,
    "title": "One Pager - 产品说明书、App流程与广告投放的跨团队讨论",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a product launch for MOBILE (9:16):\n\nMeeting Content:\nTitle: 产品说明书、App流程与广告投放的跨团队讨论\n\n# 产品说明书、App流程与广告投放的跨团队讨论\n\n## 会议概览\n- 主题围绕三大板块展开：产品说明书与QSG、A",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/51_%E4%BA%A7%E5%93%81%E8%AF%B4%E6%98%8E%E4%B9%A6%E3%80%81App%E6%B5%81%E7%A8%8B%E4%B8%8E%E5%B9%BF%E5%91%8A%E6%8A%95%E6%94%BE%E7%9A%84%E8%B7%A8%E5%9B%A2%E9%98%9F%E8%AE%A8%E8%AE%BA.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 172,
    "title": "One Pager - Repetitive Narrative_ Short Turns about a Boy and",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate brainstorm session for MOBILE (9:16):\n\nMeeting Content:\nTitle: Repetitive Narrative: Short Turns about a Boy and Others\n\n# Repetitive Narrative",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/52_Repetitive%20Narrative_%20Short%20Turns%20about%20a%20Boy%20and.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 173,
    "title": "One Pager - Fragmented Chat with Noise, Chinese Lines, and Sho",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a social gathering event infographic with festive energy:\n\nMeeting Content:\nTitle: Fragmented Chat with Noise, Chinese Lines, and Short Narrati",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/53_Fragmented%20Chat%20with%20Noise%2C%20Chinese%20Lines%2C%20and%20Sho.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 174,
    "title": "One Pager - 产品页面与数据变动对齐会议纪要",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a product design for MOBILE (9:16):\n\nMeeting Content:\nTitle: 产品页面与数据变动对齐会议纪要\n\n# 产品页面与数据变动对齐会议纪要\n\n## 会议目的\n对齐移动端“Get the Highlights”等产品页面的内容顺序、展示",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/54_%E4%BA%A7%E5%93%81%E9%A1%B5%E9%9D%A2%E4%B8%8E%E6%95%B0%E6%8D%AE%E5%8F%98%E5%8A%A8%E5%AF%B9%E9%BD%90%E4%BC%9A%E8%AE%AE%E7%BA%AA%E8%A6%81.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 175,
    "title": "One Pager - 简短会话：开始与难点",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/55_%E7%AE%80%E7%9F%AD%E4%BC%9A%E8%AF%9D%EF%BC%9A%E5%BC%80%E5%A7%8B%E4%B8%8E%E9%9A%BE%E7%82%B9.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 176,
    "title": "One Pager - 高铁遗落24万背包，铁路警方与乘警紧急联动",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate an incident response or crisis management infographic with urgency:\n\nMeeting Content:\nTitle: 高铁遗落24万背包，铁路警方与乘警紧急联动\n\n- Audio too short or no key",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/56_%E9%AB%98%E9%93%81%E9%81%97%E8%90%BD24%E4%B8%87%E8%83%8C%E5%8C%85%EF%BC%8C%E9%93%81%E8%B7%AF%E8%AD%A6%E6%96%B9%E4%B8%8E%E4%B9%98%E8%AD%A6%E7%B4%A7%E6%80%A5%E8%81%94%E5%8A%A8.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 177,
    "title": "One Pager - 两位自述：抗议者与自称有钱的人",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/57_%E4%B8%A4%E4%BD%8D%E8%87%AA%E8%BF%B0%EF%BC%9A%E6%8A%97%E8%AE%AE%E8%80%85%E4%B8%8E%E8%87%AA%E7%A7%B0%E6%9C%89%E9%92%B1%E7%9A%84%E4%BA%BA.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 178,
    "title": "One Pager - 团队对接：设计、众筹视频与Facebook投放决策会",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a product launch for MOBILE (9:16):\n\nMeeting Content:\nTitle: 团队对接：设计、众筹视频与Facebook投放决策会\n\n# 团队对接：设计、众筹视频与Facebook投放决策会\n\n## 会议目的\n对接2月11日设计反馈、众筹视频",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/58_%E5%9B%A2%E9%98%9F%E5%AF%B9%E6%8E%A5%EF%BC%9A%E8%AE%BE%E8%AE%A1%E3%80%81%E4%BC%97%E7%AD%B9%E8%A7%86%E9%A2%91%E4%B8%8EFacebook%E6%8A%95%E6%94%BE%E5%86%B3%E7%AD%96%E4%BC%9A.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 179,
    "title": "One Pager - 谈物品穿戴受损与练习时间的抱怨",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a creative hobby project infographic with artistic flair:\n\nMeeting Content:\nTitle: 谈物品穿戴受损与练习时间的抱怨\n\n- Audio too short or no key content for an",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/59_%E8%B0%88%E7%89%A9%E5%93%81%E7%A9%BF%E6%88%B4%E5%8F%97%E6%8D%9F%E4%B8%8E%E7%BB%83%E4%B9%A0%E6%97%B6%E9%97%B4%E7%9A%84%E6%8A%B1%E6%80%A8.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 180,
    "title": "One Pager - 谈物品穿戴受损与练习时间的抱怨",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a creative hobby project infographic with artistic flair:\n\nMeeting Content:\nTitle: 谈物品穿戴受损与练习时间的抱怨\n\n# 谈物品穿戴受损与练习时间的抱怨\n\n- 场景概述：两位说话者以粤语口语交流，集中抱怨",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/60_%E8%B0%88%E7%89%A9%E5%93%81%E7%A9%BF%E6%88%B4%E5%8F%97%E6%8D%9F%E4%B8%8E%E7%BB%83%E4%B9%A0%E6%97%B6%E9%97%B4%E7%9A%84%E6%8A%B1%E6%80%A8.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 181,
    "title": "One Pager - 一人独白式抒情与自我推广交织",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a brand strategy / marketing planning infographic for MOBILE (9:16):\n\nInspired by startup launch decks and product marketing one-pagers.\n\nMeeti",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/61_%E4%B8%80%E4%BA%BA%E7%8B%AC%E7%99%BD%E5%BC%8F%E6%8A%92%E6%83%85%E4%B8%8E%E8%87%AA%E6%88%91%E6%8E%A8%E5%B9%BF%E4%BA%A4%E7%BB%87.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 182,
    "title": "One Pager - 杂乱直播片段：推广、口号与碎语",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a brand strategy / marketing planning infographic for MOBILE (9:16):\n\nInspired by startup launch decks and product marketing one-pagers.\n\nMeeti",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/62_%E6%9D%82%E4%B9%B1%E7%9B%B4%E6%92%AD%E7%89%87%E6%AE%B5%EF%BC%9A%E6%8E%A8%E5%B9%BF%E3%80%81%E5%8F%A3%E5%8F%B7%E4%B8%8E%E7%A2%8E%E8%AF%AD.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 183,
    "title": "One Pager - 讨论竞品差异与展示形式",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a brand strategy / marketing planning infographic for MOBILE (9:16):\n\nInspired by startup launch decks and product marketing one-pagers.\n\nMeeti",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/63_%E8%AE%A8%E8%AE%BA%E7%AB%9E%E5%93%81%E5%B7%AE%E5%BC%82%E4%B8%8E%E5%B1%95%E7%A4%BA%E5%BD%A2%E5%BC%8F.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 184,
    "title": "One Pager - 单句时间报时",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/64_%E5%8D%95%E5%8F%A5%E6%97%B6%E9%97%B4%E6%8A%A5%E6%97%B6.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 185,
    "title": "One Pager - Single Uninterpretable Utterance",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/65_Single%20Uninterpretable%20Utterance.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 186,
    "title": "One Pager - 简短口头确认",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/66_%E7%AE%80%E7%9F%AD%E5%8F%A3%E5%A4%B4%E7%A1%AE%E8%AE%A4.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 187,
    "title": "One Pager - 睡眠质量低的简短自述",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a wellness and health tracking infographic with fresh, energetic design:\n\nMeeting Content:\nTitle: 睡眠质量低的简短自述\n\n- Audio too short or no key conte",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/67_%E7%9D%A1%E7%9C%A0%E8%B4%A8%E9%87%8F%E4%BD%8E%E7%9A%84%E7%AE%80%E7%9F%AD%E8%87%AA%E8%BF%B0.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 188,
    "title": "One Pager - Origen del nombre de la ciudad",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a research insights infographic with data visualization focus:\n\nMeeting Content:\nTitle: Origen del nombre de la ciudad\n\n- Audio too short or no",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/68_Origen%20del%20nombre%20de%20la%20ciudad.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 189,
    "title": "One Pager - 简短单句记录：三条线",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/69_%E7%AE%80%E7%9F%AD%E5%8D%95%E5%8F%A5%E8%AE%B0%E5%BD%95%EF%BC%9A%E4%B8%89%E6%9D%A1%E7%BA%BF.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 190,
    "title": "One Pager - 简短确认：这就是我想说的",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a personal daily summary / reflection infographic for MOBILE (9:16):\n\nInspired by Notion daily notes, bullet journal aesthetics, and personal p",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/70_%E7%AE%80%E7%9F%AD%E7%A1%AE%E8%AE%A4%EF%BC%9A%E8%BF%99%E5%B0%B1%E6%98%AF%E6%88%91%E6%83%B3%E8%AF%B4%E7%9A%84.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 191,
    "title": "One Pager - 简短结语：这就是我想说的",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a personal daily summary / reflection infographic for MOBILE (9:16):\n\nInspired by Notion daily notes, bullet journal aesthetics, and personal p",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/71_%E7%AE%80%E7%9F%AD%E7%BB%93%E8%AF%AD%EF%BC%9A%E8%BF%99%E5%B0%B1%E6%98%AF%E6%88%91%E6%83%B3%E8%AF%B4%E7%9A%84.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 192,
    "title": "One Pager - 傍晚询问：现在时间与天气",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a personal daily summary / reflection infographic for MOBILE (9:16):\n\nInspired by Notion daily notes, bullet journal aesthetics, and personal p",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/72_%E5%82%8D%E6%99%9A%E8%AF%A2%E9%97%AE%EF%BC%9A%E7%8E%B0%E5%9C%A8%E6%97%B6%E9%97%B4%E4%B8%8E%E5%A4%A9%E6%B0%94.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 193,
    "title": "One Pager - Quick Chat_ Screenshot Mention and Packing Reminde",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a personal daily summary / reflection infographic for MOBILE (9:16):\n\nInspired by Notion daily notes, bullet journal aesthetics, and personal p",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/73_Quick%20Chat_%20Screenshot%20Mention%20and%20Packing%20Reminde.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 194,
    "title": "One Pager - Next Day_ Two People at the Hospital",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a wellness and health tracking infographic with fresh, energetic design:\n\nMeeting Content:\nTitle: Next Day: Two People at the Hospital\n\n- Audio",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/74_Next%20Day_%20Two%20People%20at%20the%20Hospital.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 195,
    "title": "One Pager - SageMaker实战与机器学习工程化导论",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a data pipeline flow optimized for MOBILE VERTICAL DISPLAY (9:16):\n\nMeeting Content:\nTitle: SageMaker实战与机器学习工程化导论\n\n# SageMaker实战与机器学习工程化导论\n\n##",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/75_SageMaker%E5%AE%9E%E6%88%98%E4%B8%8E%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%B7%A5%E7%A8%8B%E5%8C%96%E5%AF%BC%E8%AE%BA.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 196,
    "title": "One Pager - Very Short, Unclear Exchange",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/76_Very%20Short%2C%20Unclear%20Exchange.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 197,
    "title": "One Pager - 设备异常：无法恢复与可能的 iOS 问题",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate an incident response or crisis management infographic with urgency:\n\nMeeting Content:\nTitle: 设备异常：无法恢复与可能的 iOS 问题\n\n- Audio too short or no key",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/77_%E8%AE%BE%E5%A4%87%E5%BC%82%E5%B8%B8%EF%BC%9A%E6%97%A0%E6%B3%95%E6%81%A2%E5%A4%8D%E4%B8%8E%E5%8F%AF%E8%83%BD%E7%9A%84%20iOS%20%E9%97%AE%E9%A2%98.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 198,
    "title": "One Pager - 带你逛华强北：法拉利、二手手机与翻新生意实录",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a stock market / trading session infographic optimized for MOBILE (9:16):\n\nInspired by financial dashboards and trading desk summaries.\n\nMeetin",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/78_%E5%B8%A6%E4%BD%A0%E9%80%9B%E5%8D%8E%E5%BC%BA%E5%8C%97%EF%BC%9A%E6%B3%95%E6%8B%89%E5%88%A9%E3%80%81%E4%BA%8C%E6%89%8B%E6%89%8B%E6%9C%BA%E4%B8%8E%E7%BF%BB%E6%96%B0%E7%94%9F%E6%84%8F%E5%AE%9E%E5%BD%95.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 199,
    "title": "One Pager - 华强北倒爷带你逛市场与法拉利轶事",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a research insights infographic with data visualization focus:\n\nMeeting Content:\nTitle: 华强北倒爷带你逛市场与法拉利轶事\n\n# 华强北倒爷带你逛市场与法拉利轶事\n\n## 节目概览\n- 嘉宾：在深圳华",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/79_%E5%8D%8E%E5%BC%BA%E5%8C%97%E5%80%92%E7%88%B7%E5%B8%A6%E4%BD%A0%E9%80%9B%E5%B8%82%E5%9C%BA%E4%B8%8E%E6%B3%95%E6%8B%89%E5%88%A9%E8%BD%B6%E4%BA%8B.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 200,
    "title": "One Pager - 广告投放复盘：受众、素材与归因问题集中讨论",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a brand strategy / marketing planning infographic for MOBILE (9:16):\n\nInspired by startup launch decks and product marketing one-pagers.\n\nMeeti",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/80_%E5%B9%BF%E5%91%8A%E6%8A%95%E6%94%BE%E5%A4%8D%E7%9B%98%EF%BC%9A%E5%8F%97%E4%BC%97%E3%80%81%E7%B4%A0%E6%9D%90%E4%B8%8E%E5%BD%92%E5%9B%A0%E9%97%AE%E9%A2%98%E9%9B%86%E4%B8%AD%E8%AE%A8%E8%AE%BA.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 201,
    "title": "One Pager - 下达明日任务给惠龙",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate agile sprint for MOBILE (9:16):\n\nMeeting Content:\nTitle: 下达明日任务给惠龙\n\n- Audio too short or no key content for an automatic summary.\n\n- Tap “+” to",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/81_%E4%B8%8B%E8%BE%BE%E6%98%8E%E6%97%A5%E4%BB%BB%E5%8A%A1%E7%BB%99%E6%83%A0%E9%BE%99.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 202,
    "title": "One Pager - 一句感叹：遇到困难",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a personal daily summary / reflection infographic for MOBILE (9:16):\n\nInspired by Notion daily notes, bullet journal aesthetics, and personal p",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/82_%E4%B8%80%E5%8F%A5%E6%84%9F%E5%8F%B9%EF%BC%9A%E9%81%87%E5%88%B0%E5%9B%B0%E9%9A%BE.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 203,
    "title": "One Pager - 华强北地头蛇带你看二手手机江湖",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate an executive strategy dashboard for MOBILE VERTICAL DISPLAY (9:16):\n\nMeeting Content:\nTitle: 华强北地头蛇带你看二手手机江湖\n\n# 华强北地头蛇带你看二手手机江湖\n\n一段跟随“华强北老江湖”张宇",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/83_%E5%8D%8E%E5%BC%BA%E5%8C%97%E5%9C%B0%E5%A4%B4%E8%9B%87%E5%B8%A6%E4%BD%A0%E7%9C%8B%E4%BA%8C%E6%89%8B%E6%89%8B%E6%9C%BA%E6%B1%9F%E6%B9%96.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 204,
    "title": "One Pager - 跟着倒爷逛华强北：手机买卖与翻新的生意经",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a stock market / trading session infographic optimized for MOBILE (9:16):\n\nInspired by financial dashboards and trading desk summaries.\n\nMeetin",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/84_%E8%B7%9F%E7%9D%80%E5%80%92%E7%88%B7%E9%80%9B%E5%8D%8E%E5%BC%BA%E5%8C%97%EF%BC%9A%E6%89%8B%E6%9C%BA%E4%B9%B0%E5%8D%96%E4%B8%8E%E7%BF%BB%E6%96%B0%E7%9A%84%E7%94%9F%E6%84%8F%E7%BB%8F.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 205,
    "title": "One Pager - 跟着倒爷逛华强北：法拉利、二手手机与赚钱秘籍",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a research insights infographic with data visualization focus:\n\nMeeting Content:\nTitle: 跟着倒爷逛华强北：法拉利、二手手机与赚钱秘籍\n\n# 跟着倒爷逛华强北：法拉利、二手手机与赚钱秘籍\n\n## 节目",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/85_%E8%B7%9F%E7%9D%80%E5%80%92%E7%88%B7%E9%80%9B%E5%8D%8E%E5%BC%BA%E5%8C%97%EF%BC%9A%E6%B3%95%E6%8B%89%E5%88%A9%E3%80%81%E4%BA%8C%E6%89%8B%E6%89%8B%E6%9C%BA%E4%B8%8E%E8%B5%9A%E9%92%B1%E7%A7%98%E7%B1%8D.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 206,
    "title": "One Pager - 跟着倒爷逛华强北：从法拉利到假新机的生意经",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a research insights infographic with data visualization focus:\n\nMeeting Content:\nTitle: 跟着倒爷逛华强北：从法拉利到假新机的生意经\n\n# 跟着倒爷逛华强北：从法拉利到假新机的生意经\n\n本期由一位在深",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/86_%E8%B7%9F%E7%9D%80%E5%80%92%E7%88%B7%E9%80%9B%E5%8D%8E%E5%BC%BA%E5%8C%97%EF%BC%9A%E4%BB%8E%E6%B3%95%E6%8B%89%E5%88%A9%E5%88%B0%E5%81%87%E6%96%B0%E6%9C%BA%E7%9A%84%E7%94%9F%E6%84%8F%E7%BB%8F.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 207,
    "title": "One Pager - EDM 发送、弹窗与众筹定金的行动会议",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a product launch for MOBILE (9:16):\n\nMeeting Content:\nTitle: EDM 发送、弹窗与众筹定金的行动会议\n\n# EDM 发送、弹窗与众筹定金的行动会议\n\n本次会议围绕站内弹窗触发逻辑优化、EDM发送策略与节前一周的执行计划展开，目",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/87_EDM%20%E5%8F%91%E9%80%81%E3%80%81%E5%BC%B9%E7%AA%97%E4%B8%8E%E4%BC%97%E7%AD%B9%E5%AE%9A%E9%87%91%E7%9A%84%E8%A1%8C%E5%8A%A8%E4%BC%9A%E8%AE%AE.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 208,
    "title": "One Pager - Kindergarten conference_ praise, bullying concern,",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a warm family planning infographic with cozy aesthetic:\n\nMeeting Content:\nTitle: Kindergarten conference: praise, bullying concern, and home-sc",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/88_Kindergarten%20conference_%20praise%2C%20bullying%20concern%2C.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 209,
    "title": "One Pager - 对方还在吗？短促连问抓对方注意",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/89_%E5%AF%B9%E6%96%B9%E8%BF%98%E5%9C%A8%E5%90%97%EF%BC%9F%E7%9F%AD%E4%BF%83%E8%BF%9E%E9%97%AE%E6%8A%93%E5%AF%B9%E6%96%B9%E6%B3%A8%E6%84%8F.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 210,
    "title": "One Pager - 节前市场与科技、地缘政治的风险与机会梳理",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a stock market / trading session infographic optimized for MOBILE (9:16):\n\nInspired by financial dashboards and trading desk summaries.\n\nMeetin",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/90_%E8%8A%82%E5%89%8D%E5%B8%82%E5%9C%BA%E4%B8%8E%E7%A7%91%E6%8A%80%E3%80%81%E5%9C%B0%E7%BC%98%E6%94%BF%E6%B2%BB%E7%9A%84%E9%A3%8E%E9%99%A9%E4%B8%8E%E6%9C%BA%E4%BC%9A%E6%A2%B3%E7%90%86.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 211,
    "title": "One Pager - 直播对话：主讲连线、产品文案与市井闲谈混杂",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a brand strategy / marketing planning infographic for MOBILE (9:16):\n\nInspired by startup launch decks and product marketing one-pagers.\n\nMeeti",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/91_%E7%9B%B4%E6%92%AD%E5%AF%B9%E8%AF%9D%EF%BC%9A%E4%B8%BB%E8%AE%B2%E8%BF%9E%E7%BA%BF%E3%80%81%E4%BA%A7%E5%93%81%E6%96%87%E6%A1%88%E4%B8%8E%E5%B8%82%E4%BA%95%E9%97%B2%E8%B0%88%E6%B7%B7%E6%9D%82.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 212,
    "title": "One Pager - 华强北实地带货：法拉利、大佬与二手手机生意内幕",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a research insights infographic with data visualization focus:\n\nMeeting Content:\nTitle: 华强北实地带货：法拉利、大佬与二手手机生意内幕\n\n# 华强北实地带货：法拉利、大佬与二手手机生意内幕\n\n##",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/93_%E5%8D%8E%E5%BC%BA%E5%8C%97%E5%AE%9E%E5%9C%B0%E5%B8%A6%E8%B4%A7%EF%BC%9A%E6%B3%95%E6%8B%89%E5%88%A9%E3%80%81%E5%A4%A7%E4%BD%AC%E4%B8%8E%E4%BA%8C%E6%89%8B%E6%89%8B%E6%9C%BA%E7%94%9F%E6%84%8F%E5%86%85%E5%B9%95.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 213,
    "title": "One Pager - 华强北带货走访：法拉利、翻新与二手手机生意细节",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate an executive strategy dashboard for MOBILE VERTICAL DISPLAY (9:16):\n\nMeeting Content:\nTitle: 华强北带货走访：法拉利、翻新与二手手机生意细节\n\n# 华强北带货走访：法拉利、翻新与二手手机生意细节",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/94_%E5%8D%8E%E5%BC%BA%E5%8C%97%E5%B8%A6%E8%B4%A7%E8%B5%B0%E8%AE%BF%EF%BC%9A%E6%B3%95%E6%8B%89%E5%88%A9%E3%80%81%E7%BF%BB%E6%96%B0%E4%B8%8E%E4%BA%8C%E6%89%8B%E6%89%8B%E6%9C%BA%E7%94%9F%E6%84%8F%E7%BB%86%E8%8A%82.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  },
  {
    "id": 214,
    "title": "One Pager - 单字回应的短对话",
    "description": "Meeting summary infographic (uploaded 2026-03-30).",
    "prompt": "======================================================================\nPROMPT\n======================================================================\n\nCreate a premium general-purpose meeting summary infographic for MOBILE (9:16):\n\nInspired by Notion-style dashboards, clean editorial layouts, and mod",
    "images": [
      "https://youyouxiangwang-prog.github.io/awesome-nano-banana-prompts/infographics/95_%E5%8D%95%E5%AD%97%E5%9B%9E%E5%BA%94%E7%9A%84%E7%9F%AD%E5%AF%B9%E8%AF%9D.jpg"
    ],
    "tags": [
      "one-pager",
      "infographic"
    ],
    "language": "ZH",
    "featured": false,
    "raycast": false
  }
];