# INDRZ Documentation
Welcome to INDRZ documentation.  The project homepage [www.indrz.com](https://www.indrz.com). The code is split into [frontend](https://gitlab.com/indrz/indrz-frontend) and
[backend](https://gitlab.com/indrz/indrz-backend) and documentation repositories. 

The indrz project enables you to serve indoor maps and provide shortest path routing to your users. (room to room, building to building, person to person) for your organization.


[![GitHub stars](https://img.shields.io/github/stars/indrz/indrz.svg?style=flat-square)](https://github.com/indrz/indrz/stargazers)
[![GitHub release](https://img.shields.io/github/release/indrz/indrz.svg)](https://github.com/indrz/indrz/releases)
[![license](https://img.shields.io/badge/license-AGPL-blue.svg?style=flat-square)](https://raw.githubusercontent.com/indrz/indrz/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/indrz/indrz.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)



## Quick Start Backend
Clone the backend repository

`git clone https://gitlab.com/indrz/indrz-backend.git`

Install the dependancies

Create a python virtual environment

`pip install -r requirements.txt`

1. create a postgresql database
1. create a .env file in the settings folder
1. add database credentials to .env file
1. activate your python venv
1. run Django migrate command to populate your empty database   `migrate`


[indrz Installation] (https://github.com/indrz/indrz-doc/blob/master/content/installation.md)

[indrz-Production Install](content/production-installation.md)

[indrz introduction to API] (https://github.com/indrz/indrz-doc/blob/master/content/introduction.md)

[indrz Directions API] (https://github.com/indrz/indrz-doc/blob/master/content/directions.md)

[indrz Buildings API] (https://github.com/indrz/indrz-doc/blob/master/content/buildings.md)

[indrz Working with GeoData](https://github.com/indrz/indrz-doc/blob/master/content/geodata.md)


## Build the documentation

Our documentation structure and build environment is built upon the [mapbox docbox] (https://github.com/mapbox/docbox) nodejs static
 documentation generator.  The main content is found under the (content) folder.


The npm run build command builds a bundle.js file that contains all the JavaScript code and content needed to show the site, and creates an index.html file that already contains the site content. Note that this replaces the existing index.html file, so it's best to run this only when deploying the site and to undo changes to index.html if you want to keep working on content.

Clone this repository 

```
npm install
npm run build

```

## Building blocks Libraries we use

* [Django](http://djangoproject.com) – Web Framework Backend
* [Django Rest Framework](http://www.django-rest-framework.org) – Django Rest Web Framework our API
* [PostGIS](http://postgis.net) – Spatial Database extension to Postgresql
* [PGRouting](http://pgrouting.org) - Routing extension to PostGIS and Posgresql
* [Postgresql](http://www.postgresql.org) – Database
* [Geoserver](http://geoserver.org) – Web map server to serve and create, maps and data
* [Openlayers](http://openlayers.org) – Slippy client side javascript mapping library
* [Vue.js](https://vuejs.org) Vue.js frontend framework
* [Nuxt.js](https://nuxtjs.org) vue based frontend framework
* [Vuetify](https://vuetifyjs.com/) Vuetify Vue Material Design building blocks
* [Material Design](https://material.io/) - design


## Licence
indrz is under GNU General Public License v3.0.  The name "indrz" is not allowed to be used by third parties and is a trademark.

## Mantra
Find it fast

## What is indrz? the vision
To make indoor navigation as common as GPS car navigation.

indrz is open source software API to provide indoor maps and routing directions. 
 indrz will allow you to integrate indoor maps and routing services into your homepage or application.  
 If you work at a university or other organization and need an online wayfinder [www.indrz.com] (www.indrz.com) 
 will offer our services to build or host it for you.  Our business model is like Mapbox, free open source software 
 and payed services such as data conversion, preparation or import.  The [www.indrz.com] (www.indrz.com) cloud based 
 platform can host the solution for you.

Indrz was developed out of the need to quickly communicate
how to get from point A to point B in a complex set of buildings.
Being late for your first class is never a good thing, so
to help the students out indrz was born.


## Supported and built by:

Contact: Michael Diener

Email: office@gomogi.com

[www.gomogi.com] (https://www.gomogi.com)

### What you GET
The code is for building the routing services, client side javascript to view routes, show maps, integrate maps, change floors, ...  All the functionality is baked in for your own indoor routing app or webpage.  

### What this is NOT
You do not get the data prepared for the system, data import, data conversion, platform installation, design and more.  These are all services provided by GOMOGI (maybe others in the future :) ) on the cloud platform here at (www.indrz.com) so to keep this all open source please contact us to keep things moving forward.

### What you need to DO and KNOW (the magic)
We can do this for you but if you know how you will need to know how to make the maps, import data, convert file formats such as DWG,JPG, PDF into maps or does it upload into a PostGIS database.  This is hard work and I am still looking for a quick magicical way to automagically import your indoor maps (simple images is easy and everyone can do that).  Finally you also need to build the indoor routing network.

###  What you need to DO
* import CAD, JPG, PDF,PNG... into PostGIS
* create maps (geoserver with sld) coming from your import Data
* create routes (QGIS or other Desktop GIS)
* create Client (indrz)
* create Services (indrz)
* customize Client, corporate identity
* deploy


### Where can you use it?
* universities
* hospitals
* business parks
* shopping malls
* expo halls
* events opera house, stadiums
* libraries
* any building anywhere
* meeting room finder
* digital wayfinding

## Features
* search people, places
* API connect to external data such as room booking systems vi API
* API to show or hide map components
* floor switcher to view floor plans per floor
* routing indoor 3d routes from any floor to any floor
* routing for diabled
* routing walk time
* routing distance
* routing logic such as route to front office first then to destination
* 3D view in google earth connected to 2d map
* Print maps
* share map, share route, share search results
* Points of interests: cafe, vending machines, bookstore you name it
* multilanguage to support any language
* mobile web page

## Translations
Translations are hosted by [Transifex here]  (https://www.transifex.com/organization/indrz/dashboard)
Currently we have translations for English and German, feel free to add your language.

### Current branches in use
* indrz Wirtschafts Universität Wien  indrz-campus (http://campus.wu.ac.at)
* indrz library [Vienna University of Economics and Business Administration Library](http://gis.wu.ac.at/?key=ST%20261.w34%20G744)
* indrz business park [Lakeside Science & Technology Park](http://ws1.gomogi.com/lakeside/Firmensuche.html)
* indrz Alpen Adria University Klagenfurt indzr-campus (http://campus-gis.aau.at)


## Contact & community
Communication is simple via email ([office@gomogi.com](mailto:office@gomogi.com)). All other discussion should happen in the [indrz Google Group](https://groups.google.com/forum/#!forum/indrz-dev),  or [relevant GitHub issues page](https://github.com/indrz/indrz/issues).

## Hey join us, get involved
indrz would love your help. There are more than enough things to get done so we would love your help.  We need people to help out submit bugs, suggest features, write documentation and contribute code.

Task | Skill 
--- | --- 
`write documentation` | anyone
`write translations` | multi-lingual
`submit bug report` | write detailed
`fix bugs` | git, coding
`add features` | git, coding
    



## Supporters
A big shout out to the following supporters for sharing the open source love

 - [**Browserstack**] (https://www.browserstack.com) for testing our mobile and desktop browser compatibility
 - [**Transifex**] (https://www.transifex.com/) for translations

## Design Decisions

Indrz is built for pure simplicity and quick information exchange.
A user visiting a site should quickly see their destination and
orient themselves.  Indrz is not designed as a virtual reality app
guiding you every step of the way but more like a quick reference.
You still will need to look around, but getting lost and walking
into pillars while staring at your phone should no longer happen.

## Research Areas

We are looking to expand our horizons

 * Auto generating indoor route descriptions based on points of interest and landmarks is an area in need of more research.
 * Semi-Automatic data conversion from DWG, DXF, PDF, JPG to PostGIS vector polygons, lines, and points.
 * Generation of polygon centerlines, skeletons
 * Complex topology rule checking

## Goals - Vision


We want to make sure every one can find there way with ease and make them aware of how wayfinding works teaching you at the same time how to find your way in any and every indoor environment.
