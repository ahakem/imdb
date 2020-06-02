# imdb
this is a clone from what you see when you write a movie name in Google Search on Mobile.


## How To start
- clone the repo
- open index.html

## How to see details for another movie ?

in the console you can call this `getMovie('Movie Name');`

## funcutionality you can check.

- information about any movie via `omdbapi`
- DropDown menu in navigation (Static Links)
- overview tab
    - first image from the API and a static gallery (image will open in full screen when you click)
    - show more/less info
- Cast Tab (fully static content)
    when you click on any actor it will open another screen with some info  from `data.js` file

## what I cared about here.
- Event delegation for better performance
- Unifayed code for the navigation so multibale navs will never confliect 
