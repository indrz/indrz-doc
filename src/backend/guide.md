# Backend Guides


## How to connect your systems API to the search ?
If you have an API that provides information about rooms, buildings, people, lecture halls
you name it you can use it with **[indrz](https://indrz.com)**.  The key is adding your unique
id to the data.  Your unique id is refered to as ``external-id`` in the indrz system.  Some 
organizations use the ``roomcode`` as the unique id, it really does not matter.

Basic indrz spaces API after importing your organizations data should look similar to this GeoJson:

```json
{"results":[{
        "type":"Feature",
        "geometry":{"type":"Polygon", "coordinates":[]},
        "properties": { 
            "id": 1234,                      // indrz unique id
            "name":"Study Hall Bat Cave",    // your organizations room name
            "roomcode":"1.12.0",             // your organizations roomcode
            "external-id": "CC.AB.01.12.00", // your organizations space unique id
        }
    }
    ]
}
```

The next step would be to send a request to your API to get data.  Important is that you retun the 
id you sent to ensure you find the correct data for display on the map.
