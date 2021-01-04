# Fair
An event that occurs over a few days to weeks.


## Convention hall
Users host events regularly with lots of users over a short period of time.


### Terminology

| Object | Description |
| ------ | ------ |
| Exhibitors | companies assigned to a space |
| Visitors | people visiting the fair |
| Fair (event) | the fair itself | 
| Fair grounds | the location(s) used by the fair |
| Fair space | the location(s) polygons used by the exhibitor |


### Exhibitor
| Column | header |
| ------ | ------ |
| name | cell |
| company-name | cell |
| website-url | cell |
| logo | small logo max 250px |
| street | cell |
| street number | cell |
| postalcode | cell |
| city | cell |
| country | cell |

### Fair Space
| Column | header |
| ------ | ------ |
| name | cell |
| fk-fair-id | cell |
| fk-exhibitor-id | cell |
| geometry | cell |


### Fair Event
| Column | header |
| ------ | ------ |
| name | text |
| start-date | timestamp |
| end-date | timestamp |
| logo | image |

### Fair Ground
| Column | header |
| ------ | ------ |
| name | text |
| logo | image |
| geometry | MultiPolygon |


### Features
1. import exhibitor data excel csv
1. assign exhibitor to a fair space
1. crud fair
1. crud + copy event floor plan for new event
1. assign exhibitor to event and space
1. adjust walking routing network lines
