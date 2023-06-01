
# epip-gen

epip-gen is auto generate api with typescript from swagger.json file


## Installation

Install epip-crud with npm

```bash
  npm install epip-crud -g
  cd my-project
  epip-crud {vue | ang} \
    -o {destinision_path} \
    -h {url_swagger_json} \
    -e {env_name}
```
    
## Parameters

 - -o is destinision_path for generate service from backend's apis
 - -h is swagger.json file for create generate service
 - -e is optional parameter for base api route from your envierment key
 


## Support

For support, email bakhshabadi.javad@gmail.com.


## Usage/Examples

```javascript
cd ./my-project
epip-crud vue -o ./src/ -h https://api.mydomain.com/swagger.json

```


## Related

- vue: create api service with axios
- ang: create api sevice with rxjs


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@jvdbkh](https://github.com/bakhshabadi/epip-gen)

