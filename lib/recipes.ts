export type Recipe = {
  dish: string;
  ingredients: Array<string>;
  vegetarian: boolean;
  glutenFree: boolean;
  guiltFree: boolean;
  steps: Array<string>;
  rating: number;
  n_ratings: number;
  calories: number;
}

const getUniqueIngredients = (recipes: Array<{ingredients: string[]}>) => {
  const uniqueIngredients = new Set<string>();

  recipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
      uniqueIngredients.add(ingredient.toLowerCase().trim());
    });
  });

  return Array.from(uniqueIngredients).sort();
}

const recipes: Array<Recipe> = [
  {
    "rating": 2.22,
    "n_ratings": 56,
    "calories": 446,
    "dish": "Spaghetti Aglio e Olio",
    "ingredients": [
      "spaghetti",
      "garlic",
      "olive oil",
      "red pepper flakes",
      "parsley",
      "salt"
    ],
    "vegetarian": true,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Cook spaghetti according to package instructions.",
      "Heat olive oil in a pan and sauté minced garlic until golden.",
      "Add red pepper flakes and cooked spaghetti to the pan.",
      "Toss to coat the spaghetti in the oil and garlic mixture.",
      "Garnish with chopped parsley and serve."
    ]
  },
  {
    "rating": 2.75,
    "n_ratings": 93,
    "calories": 327,
    "dish": "Grilled Chicken Salad",
    "ingredients": [
      "chicken breast",
      "mixed greens",
      "cherry tomatoes",
      "cucumber",
      "olive oil",
      "lemon juice",
      "salt",
      "pepper"
    ],
    "vegetarian": false,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Grill chicken breast until fully cooked.",
      "Slice chicken into strips.",
      "Toss mixed greens, cherry tomatoes, and cucumber in a bowl.",
      "Drizzle with olive oil and lemon juice, then season with salt and pepper.",
      "Top with grilled chicken and serve."
    ]
  },
  {
    "rating": 3.28,
    "n_ratings": 56,
    "calories": 713,
    "dish": "Vegetable Stir-Fry",
    "ingredients": [
      "broccoli",
      "carrots",
      "bell peppers",
      "soy sauce",
      "garlic",
      "ginger",
      "sesame oil",
      "tofu"
    ],
    "vegetarian": true,
    "glutenFree": false,
    "guiltFree": true,
    "steps": [
      "Heat sesame oil in a wok or large pan.",
      "Add minced garlic and ginger, and sauté until fragrant.",
      "Add chopped vegetables and tofu, and stir-fry until tender.",
      "Pour in soy sauce and toss to coat.",
      "Serve hot."
    ]
  },
  {
    "rating": 4.32,
    "n_ratings": 71,
    "calories": 240,
    "dish": "Quinoa Salad",
    "ingredients": [
      "quinoa",
      "cherry tomatoes",
      "cucumber",
      "red onion",
      "feta cheese",
      "olive oil",
      "lemon juice",
      "salt",
      "pepper"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Cook quinoa according to package instructions.",
      "Chop cherry tomatoes, cucumber, and red onion.",
      "Combine cooked quinoa, vegetables, and crumbled feta in a bowl.",
      "Drizzle with olive oil and lemon juice, then season with salt and pepper.",
      "Toss and serve."
    ]
  },
  {
    "rating": 3.01,
    "n_ratings": 39,
    "calories": 712,
    "dish": "Avocado Toast",
    "ingredients": [
      "bread",
      "avocado",
      "salt",
      "pepper",
      "lemon juice",
      "red pepper flakes"
    ],
    "vegetarian": true,
    "glutenFree": false,
    "guiltFree": true,
    "steps": [
      "Toast bread until golden brown.",
      "Mash avocado in a bowl and mix with lemon juice, salt, and pepper.",
      "Spread avocado mixture onto the toast.",
      "Sprinkle with red pepper flakes and serve."
    ]
  },
  {
    "rating": 3.36,
    "n_ratings": 21,
    "calories": 391,
    "dish": "Caesar Salad",
    "ingredients": [
      "romaine lettuce",
      "croutons",
      "parmesan cheese",
      "Caesar dressing",
      "chicken breast"
    ],
    "vegetarian": false,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Grill chicken breast until fully cooked, then slice.",
      "Toss romaine lettuce, croutons, and parmesan cheese in a bowl.",
      "Add Caesar dressing and toss to coat.",
      "Top with grilled chicken and serve."
    ]
  },
  {
    "rating": 3.54,
    "n_ratings": 4,
    "calories": 260,
    "dish": "Chicken Curry",
    "ingredients": [
      "chicken breast",
      "onion",
      "garlic",
      "ginger",
      "tomatoes",
      "coconut milk",
      "curry powder",
      "turmeric",
      "coriander",
      "salt",
      "pepper"
    ],
    "vegetarian": false,
    "glutenFree": true,
    "guiltFree": false,
    "steps": [
      "Sauté chopped onion, garlic, and ginger in a pan.",
      "Add diced chicken breast and cook until browned.",
      "Stir in curry powder, turmeric, and coriander.",
      "Add chopped tomatoes and coconut milk, then simmer until chicken is cooked.",
      "Season with salt and pepper, then serve."
    ]
  },
  {
    "rating": 4.07,
    "n_ratings": 18,
    "calories": 391,
    "dish": "Fruit Salad",
    "ingredients": [
      "strawberries",
      "blueberries",
      "bananas",
      "oranges",
      "kiwi",
      "honey",
      "mint leaves"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Chop all fruits into bite-sized pieces.",
      "Combine in a bowl and drizzle with honey.",
      "Garnish with mint leaves and serve."
    ]
  },
  {
    "rating": 3.53,
    "n_ratings": 95,
    "calories": 664,
    "dish": "Chicken Noodle Soup",
    "ingredients": [
      "chicken breast",
      "carrots",
      "celery",
      "onion",
      "egg noodles",
      "chicken broth",
      "thyme",
      "salt",
      "pepper"
    ],
    "vegetarian": false,
    "glutenFree": false,
    "guiltFree": true,
    "steps": [
      "Sauté chopped onion, carrots, and celery in a pot.",
      "Add diced chicken breast and cook until browned.",
      "Pour in chicken broth and add thyme.",
      "Simmer until chicken is cooked, then add egg noodles.",
      "Cook until noodles are tender, then season with salt and pepper.",
      "Serve hot."
    ]
  },
  {
    "rating": 3.88,
    "n_ratings": 64,
    "calories": 723,
    "dish": "Vegetable Curry",
    "ingredients": [
      "cauliflower",
      "potatoes",
      "carrots",
      "onion",
      "garlic",
      "ginger",
      "coconut milk",
      "curry powder",
      "turmeric",
      "salt",
      "pepper"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Sauté chopped onion, garlic, and ginger in a pan.",
      "Add diced vegetables and cook for a few minutes.",
      "Stir in curry powder and turmeric.",
      "Pour in coconut milk and simmer until vegetables are tender.",
      "Season with salt and pepper, then serve."
    ]
  },
  {
    "rating": 2.17,
    "n_ratings": 12,
    "calories": 639,
    "dish": "Baked Salmon",
    "ingredients": [
      "salmon fillet",
      "lemon",
      "garlic",
      "olive oil",
      "dill",
      "salt",
      "pepper"
    ],
    "vegetarian": false,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Preheat oven to 375°F (190°C).",
      "Place salmon fillet on a baking sheet.",
      "Drizzle with olive oil and sprinkle with minced garlic, dill, salt, and pepper.",
      "Slice lemon and place on top of the salmon.",
      "Bake for 15-20 minutes, then serve."
    ]
  },
  {
    "rating": 4.93,
    "n_ratings": 45,
    "calories": 248,
    "dish": "Stuffed Bell Peppers",
    "ingredients": [
      "bell peppers",
      "ground beef",
      "rice",
      "onion",
      "garlic",
      "tomato sauce",
      "cheese",
      "salt",
      "pepper"
    ],
    "vegetarian": false,
    "glutenFree": true,
    "guiltFree": false,
    "steps": [
      "Preheat oven to 375°F (190°C).",
      "Cook rice according to package instructions.",
      "Sauté chopped onion and garlic, then add ground beef and cook until browned.",
      "Mix cooked rice, beef, and tomato sauce in a bowl.",
      "Cut tops off bell peppers and remove seeds.",
      "Stuff peppers with the mixture and top with cheese.",
      "Bake for 25-30 minutes, then serve."
    ]
  },
  {
    "rating": 3.83,
    "n_ratings": 23,
    "calories": 549,
    "dish": "Tomato Basil Soup",
    "ingredients": [
      "tomatoes",
      "onion",
      "garlic",
      "basil",
      "vegetable broth",
      "heavy cream",
      "olive oil",
      "salt",
      "pepper"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": false,
    "steps": [
      "Sauté chopped onion and garlic in olive oil.",
      "Add chopped tomatoes and cook until softened.",
      "Pour in vegetable broth and simmer for 15 minutes.",
      "Blend the soup until smooth, then stir in heavy cream and chopped basil.",
      "Season with salt and pepper, then serve."
    ]
  },
  {
    "rating": 3.28,
    "n_ratings": 7,
    "calories": 265,
    "dish": "Chicken Parmesan",
    "ingredients": [
      "chicken breast",
      "breadcrumbs",
      "parmesan cheese",
      "marinara sauce",
      "mozzarella cheese",
      "eggs",
      "flour",
      "olive oil"
    ],
    "vegetarian": false,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Preheat oven to 400°F (200°C).",
      "Coat chicken breast in flour, then dip in beaten eggs, and finally coat with breadcrumbs and parmesan cheese.",
      "Heat olive oil in a pan and cook chicken until golden on both sides.",
      "Place chicken in a baking dish, top with marinara sauce and mozzarella cheese.",
      "Bake for 15-20 minutes, then serve."
    ]
  },
  {
    "rating": 4.21,
    "n_ratings": 49,
    "calories": 700,
    "dish": "Vegetable Fried Rice",
    "ingredients": [
      "rice",
      "carrots",
      "peas",
      "onion",
      "garlic",
      "soy sauce",
      "eggs",
      "sesame oil",
      "salt",
      "pepper"
    ],
    "vegetarian": true,
    "glutenFree": false,
    "guiltFree": true,
    "steps": [
      "Cook rice according to package instructions and let cool.",
      "Heat sesame oil in a pan and sauté chopped onion and garlic.",
      "Add diced carrots and peas, and cook until tender.",
      "Push vegetables to one side and scramble eggs in the pan.",
      "Add cooked rice and soy sauce, then toss to combine.",
      "Season with salt and pepper, then serve."
    ]
  },
  {
    "rating": 3.47,
    "n_ratings": 55,
    "calories": 251,
    "dish": "Lentil Soup",
    "ingredients": [
      "lentils",
      "carrots",
      "celery",
      "onion",
      "garlic",
      "vegetable broth",
      "tomatoes",
      "cumin",
      "salt",
      "pepper"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Sauté chopped onion, garlic, carrots, and celery in a pot.",
      "Add lentils, vegetable broth, and chopped tomatoes.",
      "Stir in cumin and simmer until lentils are tender.",
      "Season with salt and pepper, then serve."
    ]
  },
  {
    "rating": 4.07,
    "n_ratings": 9,
    "calories": 149,
    "dish": "Beef Burger",
    "ingredients": [
      "ground beef",
      "burger buns",
      "lettuce",
      "tomatoes",
      "onion",
      "cheese",
      "ketchup",
      "mustard",
      "salt",
      "pepper"
    ],
    "vegetarian": false,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Form ground beef into patties and season with salt and pepper.",
      "Grill or fry patties until cooked to desired doneness.",
      "Toast burger buns and assemble with lettuce, tomatoes, onion, and cheese.",
      "Add ketchup and mustard, then serve."
    ]
  },
  {
    "rating": 3.66,
    "n_ratings": 35,
    "calories": 361,
    "dish": "Vegetable Omelette",
    "ingredients": [
      "eggs",
      "bell peppers",
      "onion",
      "tomatoes",
      "spinach",
      "cheese",
      "salt",
      "pepper"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Whisk eggs in a bowl and season with salt and pepper.",
      "Sauté chopped vegetables in a pan until tender.",
      "Pour eggs over the vegetables and cook until set.",
      "Sprinkle cheese on top and fold the omelette.",
      "Serve hot."
    ]
  },
  {
    "rating": 4.07,
    "n_ratings": 91,
    "calories": 636,
    "dish": "Quinoa Buddha Bowl",
    "ingredients": [
      "quinoa",
      "chickpeas",
      "sweet potato",
      "kale",
      "tahini",
      "lemon juice",
      "olive oil"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Cook quinoa according to package instructions",
      "Roast diced sweet potato with olive oil at 400°F for 25 minutes",
      "Massage kale with olive oil and lemon juice",
      "Combine all ingredients in bowl and drizzle with tahini sauce"
    ]
  },
  {
    "rating": 3.7,
    "n_ratings": 61,
    "calories": 267,
    "dish": "Classic Beef Burger",
    "ingredients": [
      "ground beef",
      "burger buns",
      "onion",
      "lettuce",
      "tomato",
      "cheese",
      "mayonnaise"
    ],
    "vegetarian": false,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Form beef into patties and season with salt and pepper",
      "Grill burgers 4-5 minutes per side",
      "Toast buns",
      "Assemble burger with toppings"
    ]
  },
  {
    "rating": 3.3,
    "n_ratings": 5,
    "calories": 201,
    "dish": "Lentil Curry",
    "ingredients": [
      "red lentils",
      "coconut milk",
      "curry powder",
      "onion",
      "garlic",
      "ginger",
      "rice"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Sauté onion, garlic and ginger",
      "Add lentils, coconut milk and curry powder",
      "Simmer for 20 minutes",
      "Serve over rice"
    ]
  },
  {
    "rating": 4.48,
    "n_ratings": 97,
    "calories": 346,
    "dish": "Grilled Salmon",
    "ingredients": [
      "salmon fillet",
      "lemon",
      "olive oil",
      "garlic",
      "dill",
      "asparagus"
    ],
    "vegetarian": false,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Marinate salmon in lemon, olive oil, and garlic",
      "Preheat grill to medium-high",
      "Grill salmon 4-5 minutes per side",
      "Serve with grilled asparagus"
    ]
  },
  {
    "rating": 4.91,
    "n_ratings": 42,
    "calories": 537,
    "dish": "Chocolate Chip Cookies",
    "ingredients": [
      "flour",
      "butter",
      "brown sugar",
      "eggs",
      "chocolate chips",
      "vanilla extract"
    ],
    "vegetarian": true,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Cream butter and sugar",
      "Mix in eggs and vanilla",
      "Add flour and chocolate chips",
      "Bake at 375°F for 10-12 minutes"
    ]
  },
  {
    "rating": 3.91,
    "n_ratings": 3,
    "calories": 321,
    "dish": "Greek Salad",
    "ingredients": [
      "cucumber",
      "tomatoes",
      "red onion",
      "feta cheese",
      "olives",
      "olive oil",
      "oregano"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Chop vegetables into bite-sized pieces",
      "Combine in bowl",
      "Top with feta and olives",
      "Dress with olive oil and oregano"
    ]
  },
  {
    "rating": 2.58,
    "n_ratings": 27,
    "calories": 382,
    "dish": "Chicken Stir Fry",
    "ingredients": [
      "chicken breast",
      "broccoli",
      "carrots",
      "soy sauce",
      "ginger",
      "garlic",
      "rice"
    ],
    "vegetarian": false,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Cut chicken into strips",
      "Stir fry vegetables until crisp-tender",
      "Add chicken and sauce",
      "Serve over rice"
    ]
  },
  {
    "rating": 4.02,
    "n_ratings": 70,
    "calories": 541,
    "dish": "Mushroom Risotto",
    "ingredients": [
      "arborio rice",
      "mushrooms",
      "white wine",
      "onion",
      "parmesan",
      "vegetable broth"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": false,
    "steps": [
      "Sauté mushrooms and onion",
      "Add rice and wine",
      "Gradually add broth while stirring",
      "Finish with parmesan"
    ]
  },
  {
    "rating": 3.91,
    "n_ratings": 56,
    "calories": 404,
    "dish": "Fish Tacos",
    "ingredients": [
      "white fish",
      "corn tortillas",
      "cabbage slaw",
      "lime",
      "avocado",
      "cilantro"
    ],
    "vegetarian": false,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Season and grill fish",
      "Warm tortillas",
      "Make cabbage slaw",
      "Assemble tacos with toppings"
    ]
  },
  {
    "rating": 3.26,
    "n_ratings": 92,
    "calories": 583,
    "dish": "Vegetable Lasagna",
    "ingredients": [
      "lasagna noodles",
      "zucchini",
      "spinach",
      "ricotta",
      "marinara sauce",
      "mozzarella"
    ],
    "vegetarian": true,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Layer noodles with vegetables",
      "Add cheese and sauce layers",
      "Repeat layers",
      "Bake at 375°F for 45 minutes"
    ]
  },
  {
    "rating": 4.09,
    "n_ratings": 10,
    "calories": 320,
    "dish": "Shrimp Scampi",
    "ingredients": [
      "shrimp",
      "linguine",
      "garlic",
      "white wine",
      "lemon",
      "parsley",
      "butter"
    ],
    "vegetarian": false,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Cook pasta al dente",
      "Sauté shrimp in garlic butter",
      "Add wine and lemon",
      "Toss with pasta and parsley"
    ]
  },
  {
    "rating": 4.52,
    "n_ratings": 19,
    "calories": 149,
    "dish": "Cauliflower Pizza",
    "ingredients": [
      "cauliflower",
      "eggs",
      "mozzarella",
      "tomato sauce",
      "basil",
      "olive oil"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Rice cauliflower and drain well",
      "Mix with eggs and cheese for crust",
      "Pre-bake crust",
      "Add toppings and bake again"
    ]
  },
  {
    "rating": 4.4,
    "n_ratings": 26,
    "calories": 399,
    "dish": "Beef Stir Fry",
    "ingredients": [
      "beef strips",
      "bell peppers",
      "snap peas",
      "soy sauce",
      "ginger",
      "garlic"
    ],
    "vegetarian": false,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Marinate beef in soy sauce",
      "Stir fry vegetables",
      "Add beef and sauce",
      "Serve hot"
    ]
  },
  {
    "rating": 2.85,
    "n_ratings": 31,
    "calories": 685,
    "dish": "Chickpea Curry",
    "ingredients": [
      "chickpeas",
      "coconut milk",
      "tomatoes",
      "curry powder",
      "onion",
      "rice"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Sauté onions",
      "Add spices and tomatoes",
      "Simmer with coconut milk",
      "Serve over rice"
    ]
  },
  {
    "rating": 3.55,
    "n_ratings": 42,
    "calories": 184,
    "dish": "Banana Bread",
    "ingredients": [
      "bananas",
      "flour",
      "eggs",
      "sugar",
      "butter",
      "vanilla extract"
    ],
    "vegetarian": true,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Mash bananas",
      "Mix wet and dry ingredients",
      "Pour into loaf pan",
      "Bake at 350°F for 1 hour"
    ]
  },
  {
    "rating": 3.67,
    "n_ratings": 66,
    "calories": 623,
    "dish": "Chicken Caesar Salad",
    "ingredients": [
      "chicken breast",
      "romaine lettuce",
      "parmesan",
      "croutons",
      "caesar dressing"
    ],
    "vegetarian": false,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Grill chicken and slice",
      "Chop lettuce",
      "Toss with dressing",
      "Top with parmesan and croutons"
    ]
  },
  {
    "rating": 3.44,
    "n_ratings": 67,
    "calories": 546,
    "dish": "Black Bean Tacos",
    "ingredients": [
      "black beans",
      "corn tortillas",
      "avocado",
      "salsa",
      "lime",
      "cilantro"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Heat beans with spices",
      "Warm tortillas",
      "Mash avocado with lime",
      "Assemble tacos"
    ]
  },
  {
    "rating": 3.66,
    "n_ratings": 99,
    "calories": 437,
    "dish": "Pesto Pasta",
    "ingredients": [
      "pasta",
      "basil",
      "pine nuts",
      "garlic",
      "parmesan",
      "olive oil"
    ],
    "vegetarian": true,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Cook pasta",
      "Blend pesto ingredients",
      "Toss pasta with pesto",
      "Top with extra parmesan"
    ]
  },
  {
    "rating": 3.57,
    "n_ratings": 41,
    "calories": 750,
    "dish": "Turkey Meatballs",
    "ingredients": [
      "ground turkey",
      "breadcrumbs",
      "egg",
      "onion",
      "parsley",
      "marinara sauce"
    ],
    "vegetarian": false,
    "glutenFree": false,
    "guiltFree": true,
    "steps": [
      "Mix meatball ingredients",
      "Form into balls",
      "Brown in pan",
      "Simmer in sauce"
    ]
  },
  {
    "rating": 4.84,
    "n_ratings": 2,
    "calories": 472,
    "dish": "Tofu Stir Fry",
    "ingredients": [
      "tofu",
      "broccoli",
      "carrots",
      "soy sauce",
      "ginger",
      "rice"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Press and cube tofu",
      "Stir fry vegetables",
      "Add tofu and sauce",
      "Serve over rice"
    ]
  },
  {
    "rating": 4.92,
    "n_ratings": 66,
    "calories": 406,
    "dish": "Seafood Paella",
    "ingredients": [
      "rice",
      "shrimp",
      "mussels",
      "saffron",
      "peas",
      "bell peppers"
    ],
    "vegetarian": false,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Toast rice with saffron",
      "Add broth and vegetables",
      "Add seafood",
      "Cook until rice is done"
    ]
  },
  {
    "rating": 3.87,
    "n_ratings": 45,
    "calories": 630,
    "dish": "Eggplant Parmesan",
    "ingredients": [
      "eggplant",
      "breadcrumbs",
      "marinara sauce",
      "mozzarella",
      "parmesan"
    ],
    "vegetarian": true,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Bread eggplant slices",
      "Fry until golden",
      "Layer with sauce and cheese",
      "Bake until bubbly"
    ]
  },
  {
    "rating": 3.7,
    "n_ratings": 18,
    "calories": 519,
    "dish": "Beef Stew",
    "ingredients": [
      "beef chunks",
      "potatoes",
      "carrots",
      "onion",
      "beef broth",
      "red wine"
    ],
    "vegetarian": false,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Brown beef chunks",
      "Add vegetables and liquid",
      "Simmer for 2 hours",
      "Season to taste"
    ]
  },
  {
    "rating": 3.91,
    "n_ratings": 10,
    "calories": 677,
    "dish": "Vegetable Soup",
    "ingredients": [
      "carrots",
      "celery",
      "onion",
      "tomatoes",
      "vegetable broth",
      "herbs"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Chop vegetables",
      "Sauté vegetables",
      "Add broth and simmer",
      "Season with herbs"
    ]
  },
  {
    "rating": 2.4,
    "n_ratings": 3,
    "calories": 746,
    "dish": "Baked Chicken",
    "ingredients": [
      "chicken",
      "herbs",
      "lemon",
      "garlic",
      "olive oil",
      "potatoes"
    ],
    "vegetarian": false,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Season chicken",
      "Add vegetables around chicken",
      "Bake at 375°F",
      "Rest before serving"
    ]
  },
  {
    "rating": 4.56,
    "n_ratings": 70,
    "calories": 310,
    "dish": "Mushroom Omelette",
    "ingredients": [
      "eggs",
      "mushrooms",
      "cheese",
      "herbs",
      "butter",
      "salt"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Sauté mushrooms",
      "Beat eggs",
      "Cook omelette",
      "Fill and fold"
    ]
  },
  {
    "rating": 4.42,
    "n_ratings": 79,
    "calories": 748,
    "dish": "Fruit Smoothie",
    "ingredients": [
      "banana",
      "berries",
      "yogurt",
      "honey",
      "almond milk",
      "ice"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Freeze fruit",
      "Combine ingredients",
      "Blend until smooth",
      "Serve immediately"
    ]
  },
  {
    "rating": 4.14,
    "n_ratings": 98,
    "calories": 706,
    "dish": "Tuna Salad",
    "ingredients": [
      "tuna",
      "mayonnaise",
      "celery",
      "onion",
      "pickle",
      "lettuce"
    ],
    "vegetarian": false,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Drain tuna",
      "Chop vegetables",
      "Mix ingredients",
      "Serve on lettuce"
    ]
  },
  {
    "rating": 2.92,
    "n_ratings": 19,
    "calories": 698,
    "dish": "Pancakes",
    "ingredients": [
      "flour",
      "milk",
      "eggs",
      "butter",
      "maple syrup",
      "vanilla"
    ],
    "vegetarian": true,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Mix wet ingredients",
      "Add dry ingredients",
      "Cook on griddle",
      "Serve with syrup"
    ]
  },
  {
    "rating": 2.17,
    "n_ratings": 51,
    "calories": 242,
    "dish": "Caprese Salad",
    "ingredients": [
      "tomatoes",
      "mozzarella",
      "basil",
      "olive oil",
      "balsamic vinegar"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Slice tomatoes and cheese",
      "Arrange with basil",
      "Drizzle with oil and vinegar",
      "Season with salt"
    ]
  },
  {
    "rating": 3.39,
    "n_ratings": 90,
    "calories": 588,
    "dish": "Beef Tacos",
    "ingredients": [
      "ground beef",
      "taco seasoning",
      "tortillas",
      "lettuce",
      "cheese",
      "salsa"
    ],
    "vegetarian": false,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Brown beef",
      "Add seasoning",
      "Warm tortillas",
      "Assemble tacos"
    ]
  },
  {
    "rating": 2.38,
    "n_ratings": 53,
    "calories": 349,
    "dish": "Vegetable Stir Fry",
    "ingredients": [
      "mixed vegetables",
      "tofu",
      "soy sauce",
      "ginger",
      "garlic",
      "rice"
    ],
    "vegetarian": true,
    "glutenFree": true,
    "guiltFree": true,
    "steps": [
      "Prepare vegetables",
      "Stir fry in stages",
      "Add sauce",
      "Serve over rice"
    ]
  },
  {
    "rating": 4.09,
    "n_ratings": 68,
    "calories": 350,
    "dish": "Apple Pie",
    "ingredients": [
      "apples",
      "flour",
      "butter",
      "sugar",
      "cinnamon",
      "lemon juice"
    ],
    "vegetarian": true,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Make pie crust",
      "Prepare apple filling",
      "Assemble pie",
      "Bake until golden"
    ]
  },
  {
    "rating": 2.34,
    "n_ratings": 47,
    "calories": 398,
    "dish": "Grilled Cheese",
    "ingredients": [
      "bread",
      "cheese",
      "butter",
      "tomato soup"
    ],
    "vegetarian": true,
    "glutenFree": false,
    "guiltFree": false,
    "steps": [
      "Butter bread",
      "Add cheese",
      "Grill until golden",
      "Serve with soup"
    ]
  }
]

export const ingredients = getUniqueIngredients(recipes);

export const getRecipe = (dishName: string): Recipe | undefined => {
  return recipes.find(
    (recipe) => recipe.dish.toLowerCase() === dishName.toLowerCase()
  );
};

export const matchRecipes = (
  availableIngredients: string[], 
  limit: number = 10,
  filters: { 
    showVegetarian: boolean, 
    showGlutenFree: boolean, 
    showGuiltFree: boolean 
  } = {showVegetarian: false, showGlutenFree: false, showGuiltFree: false}
): Recipe[] => {
  const availableIngredientsSet = new Set(availableIngredients);

  let filteredRecipes = recipes.filter(recipe => {
    return (!filters.showGlutenFree || recipe.glutenFree) &&
           (!filters.showGuiltFree  || recipe.guiltFree) &&
           (!filters.showVegetarian || recipe.vegetarian);
  });

  const scoredRecipes = filteredRecipes.map(recipe => {
    const recipeIngredientsSet = new Set(recipe.ingredients);
    let score = 0;

    if (Array.from(recipeIngredientsSet).every(ingredient => availableIngredientsSet.has(ingredient))) {
      score = 100;
    } else {
      const overlap = new Set([...availableIngredientsSet].filter(i => recipeIngredientsSet.has(i)));
      score = Math.round((overlap.size / recipeIngredientsSet.size) * 100);
    }

    return {
      ...recipe,
      score
    };
  });

  return scoredRecipes
  .sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.rating - a.rating;
  })
  .slice(0, limit);
}
