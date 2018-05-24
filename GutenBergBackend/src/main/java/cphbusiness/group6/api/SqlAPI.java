package cphbusiness.group6.api;

import com.google.gson.Gson;
import cphbusiness.group6.Controllers.MongoController;
import cphbusiness.group6.Controllers.PSQLController;
import cphbusiness.group6.interfaces.entities.I_Book;
import cphbusiness.group6.interfaces.entities.I_City;
import cphbusiness.group6.interfaces.entities.I_Coordinate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SqlAPI
{

    PSQLController mcHammer = new PSQLController();

    @CrossOrigin
    @RequestMapping(value = "/api/psql/books/{city}", method = RequestMethod.GET, produces = "application/json")
    public List<I_Book> getBooks(@PathVariable("city") String city)
    {

        return mcHammer.getAllBooksThatMentionCity(city);
    }

    @CrossOrigin
    @RequestMapping(value = "/api/psql/plot/{book}", method = RequestMethod.GET, produces = "application/json")
    public List<I_City> plotCities(@PathVariable("book") String book)
    {


        return mcHammer.getAllCitiesMentionedInBook(book);

    }

    @CrossOrigin
    @RequestMapping(value = "/api/psql/booksplot/{author}", method = RequestMethod.GET, produces = "application/json")
    public List<I_Book> getBooksAndPlot(@PathVariable("author") String author)
    {

        return mcHammer.getAllBooksWrittenByAuthor(author);
    }

    @CrossOrigin
    @RequestMapping(value = "/api/psql/vicinity/{lat}/{lon}", method = RequestMethod.GET, produces = "application/json")
    public List<I_Book> cityVicinity(@PathVariable("lat") double lat, @PathVariable("lon") double lon)
    {


        return mcHammer.getCitiesCloseToGeoLocation(new I_Coordinate()
        {
            @Override
            public double getLang()
            {
                return lon;
            }

            @Override
            public double getLat()
            {
                return lat;
            }
        });
    }
}
