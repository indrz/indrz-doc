## indrz Buildings API

The following Buildings API manages information related to buildings. You can use this API to request
and remove different buildings and related building information such as spaces

QUICK GUIDE TO ENDPOINTS GET request
```endpoint
/buildings/  -return all buildings
/buildings/{building_id}/   - returns info about a single building with ID
/buildings/{building_id}/floor/{floor_id}/   -return info about a single floor in a building
/buildings/{building_id}/floor/{floor_id}/spaces   -return all spaces on specific floor
/buildings/campus/{campus_id}   -return all buildings on specific campus
/campus/{campus_id}/buildings   - retrun all building on specific campus
```

### List Buildings on campus

Lists all buildings located with in a specified campus area.  A building is always located on a campus.

```endpoint
GET /api/v1/buildings/campus/{campus_id}
```

#### Example request

```curl
$ curl https://www.indrz.com/api/v1/buildings/campus/{campus_id}
```


```javascript
client.listbuilding(function(err, building) {
  console.log(building);
});
```

```python
building.list()
```

#### Example response

```json
[
    {
        "id": 1,
        "building_name": "",
        "num_floors": 0,
        "buildingfloor_set": [
            {
                "id": 2,
                "short_name": "Etage 0",
                "floor_num": 0,
                "fk_building": 1,
                "buildingfloorspace_set": {
                    "type": "FeatureCollection",
                    "features": []
                }
            }
        ]
    }
]
```

### Create building

Creates a new, empty building.

```endpoint
POST /api/v1/buildings/
```

#### Example request

```curl
curl -X POST https://www.indrz.com/api/v1/buildings/
```

```bash
$ wbl building create
```

```javascript
client.createbuilding({
  name: 'example',
  description: 'An example building'
}, function(err, building) {
  console.log(building);
});
```

```python
response = indrz.create(
  name='example', description='An example building')
```

#### Example request body

```json
{
  "name": "foo",
  "description": "bar"
}
```

Property | Description
---|---
`name` | the name of the building
`campus_id` |  the id of the campus the buildings belongs to
`description` | (optional) a description of the building

#### Example response

```json
{
  "owner": "{username}",
  "id": "{building_id}",
  "name": null,
  "description": null,
  "created": "{timestamp}",
  "modified": "{timestamp}"
}
```

### Retrieve a building

Returns a single building.

```endpoint
GET /api/v1/buildings/{building_id}
```

Retrieve information about an existing building.

#### Example request

```curl
curl https://www.indrz.com/api/v1/buildings/{building_id}
```

```bash
$ wbl building read-building building-id
```

```python
attrs = indrz.read_building(building_id).json()
```

```javascript
client.readbuilding('building-id',
  function(err, building) {
    console.log(building);
  });
```

#### Example response

```json
{
  "owner": "{username}",
  "id": "{building_id}",
  "created": "{timestamp}",
  "modified": "{timestamp}"
}
```

### Update a building

Updates the properties of a particular building.

```endpoint
PATCH /api/v1/buildings/{building_id}
```

#### Example request

```curl
curl --request PATCH https://www.indrz.com/api/v1/buildings/{building_id} \
  -d @data.json
```

```python
resp = indrz.update_building(
  building_id,
  name='updated example',
  description='An updated example building'
  ).json()
```

```bash
$ wbl building update-building building-id
```

```javascript
var options = { name: 'foo' };
client.updatebuilding('building-id', options, function(err, building) {
  console.log(building);
});
```

#### Example request body

```json
{
  "name": "foo",
  "description": "bar"
}
```

Property | Description
---|---
`name` | (optional) the name of the building
`description` | (optional) a description of the building

#### Example response

```json
{
  "owner": "{username}",
  "id": "{building_id}",
  "name": "foo",
  "description": "bar",
  "created": "{timestamp}",
  "modified": "{timestamp}"
}
```

### Delete a building

Deletes a building, including all wibbles it contains.

```endpoint
DELETE /api/v1/buildings/{building_id}
```

#### Example request

```curl
curl -X DELETE https://www.indrz.com/api/v1/buildings/{building_id}
```

```bash
$ wbl building delete-building building-id
```

```python
resp = indrz.delete_building(building_id)
```

```javascript
client.deletebuilding('building-id', function(err) {
  if (!err) console.log('deleted!');
});
```

#### Example response

> HTTP 204

### List buildings

List all the buildings in on a campus. The response body will be a
buildingCollection.

```endpoint
GET /api/v1/buildings/campus/{campus_id}
```

#### Example request

```curl
curl https://www.indrz.com/api/v1/buildings/campus/{campus_id}
```

```bash
$ wbl building list-campus building-id
```

```python
collection = indrz.list_campus(building_id).json()
```

```javascript
client.listindrz('building-id', {}, function(err, collection) {
  console.log(collection);
});
```

#### Example response

```json
{
  "type": "building",
  "campus": [
    {
      "id": "{campus_id}",
      "type": "building",
      "properties": {
        "prop0": "value0"
      }
    },
    {
      "id": "{campus_id}",
      "type": "building",
      "properties": {
        "prop0": "value0"
      }
    }
  ]
}
