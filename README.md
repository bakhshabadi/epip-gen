
# epip-gen

epip-gen is auto generate api with typescript from swagger.json file


## Installation

Install epip-gen with npm

```bash
  npm install epip-gen -g
  cd my-project
  epip-gen {vue | ang} \
    -o {destinision_path} \
    -h {url_swagger_json} \
    -e {env_name}  // optional
```
    
## Parameters

 - -o is destinision_path for generate service from backend's apis
 - -h is swagger.json file for create generate service
 - -e is optional parameter for base api route from your envierment key  [optional]
 


## Support

For support, email bakhshabadi.javad@gmail.com.


## Usage/Examples

```javascript
cd ./my-project
epip-gen react -o ./src -h https://api.mydomain.com/swagger.json

```


## Related

- vue: create api service with axios
- ang: create api sevice with rxjs


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@jvdbkh](https://github.com/bakhshabadi/epip-gen)

