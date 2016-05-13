## indrz Directions API

Welcome to the indoor directions API. You can use this API to request directions.

### Retrieve directions using only coordinates
url(r'^directions/(?P<start_coord>[-]?\d+\.?\d+,\d+\.\d+),(?P<start_floor>[-]?\d+)&(?P<end_coord>[-]?\d+\.?\d+,\d+\.\d+),(?P<end_floor>[-]?\d+)&(?P<route_type>[0-9])/$', 'create_route_from_coords'

Returns a single route between two point coordinates.

```endpoint
GET /api/v1/directions/{start_coord},{start_floor}&{end_coord},{end_floor}&{route_type}
```

Retrieve route coordinate in a request

#### Example request

```curl
curl https://www.indrz.com/api/v1/directions/{start_coord},{start_floor}&{end_coord},{end_floor}&{route_type}
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

#url(r'^directions/(?P<start_room_key>\d{5})&(?P<end_room_key>\d{5})&(?P<route_type>[0-9])/$', 'route_room_to_room', name='route-room-to-room'),
url(r'^directions/(?P<building_id>buildingid=\d{1,5})&(?P<start_room_id>startid=\d{1,5})&(?P<end_room_id>endid=\d{1,5})(?P<route_type>&type=\d{1,5})?/$',
    'create_route_from_id', name='routing-from-id'),
url(r'^directions/(?P<building_id>buildingid=\d{1,5})&(?P<start_term>startid=.+)&(?P<end_term>endid=.+)(?P<route_type>&type=\d{1,5})?/$',
    'create_route_from_search', name='routing-from-search'),
url(r'^directions/force_mid/', 'force_route_mid_point', name='force-route-midpoint')

### Retrieve directions

Returns a single building.

```endpoint
GET /api/v1/{username}/{building_id}
```

Retrieve information about an existing building.

#### Example request

```curl
curl https://www.indrz.com/api/v1/{username}/{building_id}
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
PATCH /api/v1/{username}/{building_id}
```

#### Example request

```curl
curl --request PATCH https://www.indrz.com/api/v1/{username}/{building_id} \
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
DELETE /api/v1/{username}/{building_id}
```

#### Example request

```curl
curl -X DELETE https://www.indrz.com/api/v1/{username}/{building_id}
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
GET /api/v1/{username}/{building_id}/campus
```

#### Example request

```curl
curl https://www.indrz.com/api/v1/{username}/{building_id}/campus
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
```

### Insert or update a space

Inserts or updates a space in a building. If there's already a space
with the given ID in the building, it will be replaced. If there isn't
a space with that ID, a new space is created.

```endpoint
PUT /api/v1/{username}/{building_id}/campus/{space_id}
```

#### Example request

```curl
curl https://www.indrz.com/api/v1/{username}/{building_id}/campus/{space_id} \
  -X PUT \
  -d @file.geojson
```

```bash
$ wbl building put-campus building-id campus-id 'geojson-campus'
```

```javascript
var campus = {
  "type": "building",
  "properties": { "name": "Null Island" }
};
client.insertbuilding(campus, 'building-id', function(err, wibble) {
  console.log(campus);
});
```

#### Example request body

```json
{
  "id": "{space_id}",
  "type": "building",
  "properties": {
    "prop0": "value0"
  }
}
```

Property | Description
--- | ---
`id` | the id of an existing space in the building

#### Example response

```json
{
  "id": "{space_id}",
  "type": "building",
  "properties": {
    "prop0": "value0"
  }
}
```

### Retrieve a space

Retrieves a space in a building.

```endpoint
GET /api/v1/{username}/{building_id}/campus/{space_id}
```

#### Example request

```curl
curl https://www.indrz.com/api/v1/{username}/{building_id}/campus/{space_id}
```

```bash
$ wbl building read-space building-id campus-id
```

```javascript
client.readbuilding('space-id', 'building-id',
  function(err, space) {
    console.log(space);
  });
```

```python
wibble = indrz.read_space(building_id, '2').json()
```

#### Example response

```json
{
  "id": "{space_id}",
  "type": "building",
  "properties": {
    "prop0": "value0"
  }
}
```

### Delete a space

Removes a space from a building.

```endpoint
DELETE /api/v1/{username}/{building_id}/campus/{space_id}
```

#### Example request

```javascript
client.deletebuilding('campus-id', 'building-id', function(err, space) {
  if (!err) console.log('deleted!');
});
```

```curl
curl -X DELETE https://www.indrz.com/api/v1/{username}/{building_id}/campus/{space_id}
```

```python
resp = indrz.delete_space(building_id, campus_id)
```

```bash
$ wbl building delete-space building-id campus-id
```

#### Example response

> HTTP 204
