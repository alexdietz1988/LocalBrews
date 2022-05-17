# Local Brews

## Project Description 
The app will help users find breweries in their area and keep track of the local beers they’ve tried, using data from Open Brewery DB.

## Link to the API you plan to use
[Open Brewery DB](https://www.openbrewerydb.org)

## Example data response you plan to use
```json
[
    {
        "id": "cambridge-brewing-co-cambridge",
        "name": "Cambridge Brewing Co",
        "brewery_type": "brewpub",
        "street": "1 Kendall Sq Ste B1102",
        "address_2": null,
        "address_3": null,
        "city": "Cambridge",
        "state": "Massachusetts",
        "county_province": null,
        "postal_code": "02139-1592",
        "country": "United States",
        "longitude": null,
        "latitude": null,
        "phone": "6174941994",
        "website_url": "http://www.cambridgebrewingcompany.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    },
    {
        "id": "lamplighter-brewing-co-cambridge",
        "name": "Lamplighter Brewing Co.",
        "brewery_type": "micro",
        "street": "284 Broadway",
        "address_2": null,
        "address_3": null,
        "city": "Cambridge",
        "state": "Massachusetts",
        "county_province": null,
        "postal_code": "02139-1808",
        "country": "United States",
        "longitude": null,
        "latitude": null,
        "phone": "6179450450",
        "website_url": "http://www.lamplighterbrewing.com",
        "updated_at": "2021-10-23T02:24:55.243Z",
        "created_at": "2021-10-23T02:24:55.243Z"
    }
]
```

## Visual of your component hierarchy
<img width="2128" alt="Local Brews Component Hierarchy" src="https://user-images.githubusercontent.com/100381791/168474279-270417cd-eb24-4376-b716-c06035fa0f4b.png">

## Wire Frames
![Local Brews Wireframes](https://user-images.githubusercontent.com/100381791/168474254-7989283f-e9be-4adb-97c1-88466c37a95d.png)

## ERD
![Local Brews ERD](https://user-images.githubusercontent.com/100381791/168474284-cd2fd7ec-455e-43bc-af31-5d95d633c42f.png)

## User Stories
1. I want to be able to enter my current city, and see a list of local breweries.
2. I want to be able to click on a brewery to see more information about it.
3. I want to be able to save a brewery if I’m interested in trying their beers, and see a list of the breweries I’ve saved. I want to be able to remove a brewery if I’m no longer interested in it.

4. (Stretch) I want to be able to register for an account and login in order to save information about breweries I’m interested in or beers I’ve tried from them.
5. (Stretch) I want to be able to log a beer that I’ve tried from a particular brewery, with the option to add information about the beer (e.g. style) and a rating.
6. (Stretch) I want to be able to see a chronological list of all the beers I’ve logged.
7. (Stretch) I want to be able to see a list of the beers I’ve logged sorted by brewery.
8. (Stretch) I want to get suggestions of other nearby cities that I might also want to search.

### MVP Goals
- [ ] Home
- [ ] Header, Nav, Footer
- [ ] Brewery Search
- [ ] Brewery (Show Page)
- [ ] Add/Remove a Brewery to My List

### Stretch Goals
- [ ] Register / Login
- [ ] Log a Beer
- [ ] Beer Log (Index Page)
- [ ] Beer Log: Sort by Brewery
- [ ] Brewery Search: Suggest Nearby Cities