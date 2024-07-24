using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GamerHub_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DevolucionController : ControllerBase
    {
        // GET: api/<DevolucionController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<DevolucionController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DevolucionController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<DevolucionController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DevolucionController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
