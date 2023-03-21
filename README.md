# ufos

## Overview:
To create a webpage to sort and view reported ufo sightings.

## Results:
[The final result is being hosted here using GitHub Pages.](https://awarsha2.github.io/ufos/)

The overall default page has an overwhelmingly large number of ufo sighting entries. 

[search_state_ny.png](images/search_state_ny.png)

As shown, just a single search term can narrow down the entrees greatly so that users can better find sightings relevants to their interests or location. Compounding filters will narrow it down further. 

[search_default.png](images/search_default.png)

Each search criteria also shows a grey-ed out example to show the user the proper format of each search criteria which will hopefully give users an easier time utilizing the webpage. 

## Summary:
One drawback of this design is the specificity of each search bar. They all require specific formats, such as all lowercase or a specific DD/MM/YYYY date. One recomendation to solve this would be string modification of the user input, like a to_lowercase type function to unrestrict the user entries for words and places. Another could be drop down menus for each category, which would completely eliminate frustrating mispelling searches that return no entries. However, depending on the category, the lists would get very large and could become unweildy, especially as the data set grows over the years. 