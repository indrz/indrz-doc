## indrz Buildings API

The following Buildings API manages information related to buildings. You can use this API to request
and remove different buildings and related building information such as spaces

### List Buildings

Lists all buildings located with in a specified campus area.  A building is always located on a campus.

```endpoint
GET /api/v1/{username} building:read
```

#### Example request

```curl
$ curl https://www.indrz.com/api/v1/{username}
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
    "owner": "{username}",
    "id": "{building_id}",
    "created": "{timestamp}",
    "modified": "{timestamp}"
  },
  {
    "owner": "{username}",
    "id": "{building_id}",
    "created": "{timestamp}",
    "modified": "{timestamp}"
  }
]
```

### Create building

Creates a new, empty building.

```endpoint
POST /api/v1/{username}
```

#### Example request

```curl
curl -X POST https://www.indrz.com/api/v1/{username}
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
`name` | (optional) the name of the building
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
