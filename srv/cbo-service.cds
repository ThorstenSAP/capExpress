
using {NorthWind as externNorthwind} from './external/NorthWind';


@path: '/browse'
service browse {
    entity NorthWind as select from externNorthwind.Products{
        key ID, Name, Description, ReleaseDate, DiscontinuedDate, Rating, Price
    };

}

