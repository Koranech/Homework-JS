fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(data => {
        let recipes = data.recipes
        console.log(recipes)
        for (const recipe of recipes) {
            document.write('<div>')
            document.write(`
        <h2>Recipe - ${recipe.id}</h2>
        <p>Калорії - ${recipe.caloriesPerServing}</p>
        <p>Час приготування - ${recipe.cookTimeMinutes}</p>
        <p>Час приготування - ${recipe.cookTimeMinutes}</p>
        <p>Національність їжі - ${recipe.cuisine}</p>
        <p>Складність приготування - ${recipe.difficulty}</p>
        <img src="${recipe.image}" alt="dish">
        `)
            let ingredients = recipe.ingredients
            document.write('<h3>Інгредієнти</h3>')
            document.write('<ul>')
            for (const ingredient of ingredients) {
                document.write(`
                    <li>${ingredient} </li>
                    `)
            }
            document.write('</ul>')

            let instructions = recipe.instructions
            document.write('<h3>Інструкція</h3>')
            document.write('<ul>')
            for (const instruction of instructions) {
                document.write(`
                    <li>${instruction} </li>
                    `)
            }
            document.write('</ul>')

            document.write(`<p>Тип страви - ${recipe.mealType}</p>`)
            document.write(`<p>Назва страви - ${recipe.name}</p>`)
            document.write(`<p>Час готування - ${recipe.prepTimeMinutes}</p>`)
            document.write(`<p>Оцінка страви - ${recipe.rating}</p>`)
            document.write(`<p>Кількість відгуків - ${recipe.reviewCount}</p>`)
            document.write(`<p>Порції - ${recipe.servings}</p>`)

            let tags = recipe.tags
            document.write('<h3>Теги</h3>')
            document.write('<ul>')
            for (const tag of tags) {
                document.write(`
                    <li>${tag} </li>
                    `)
            }
            document.write('</ul>')

            document.write(`<p>Айді автора - ${recipe.userId}</p>`)

            document.write(`
            <h1> </h1>
            <hr>
`)
            document.write('</div>')
        }
    });
