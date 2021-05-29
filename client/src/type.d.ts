interface ILocation {
    geonameid:	number,
    name:		string,
    asciiname:	string,
    alternatenames:	string,
    latitude:	number,
    longitude:	number,
    feature_class:	string,
    feature_code:	string,
    country_code:	string,
    cc2:		string,
    admin1_code:	string,
    admin2_code:	string,
    admin3_code: 	string,
    admin4_code:	string,
    population:	number,
    elevation:	string,
    dem:		number,
    timezone:	string,
    modification_date: string
}
  
interface LocationProps {
    location: ILocation
}
  
type ApiDataType = {
    locations: ILocation[]
}