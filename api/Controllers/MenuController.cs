using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers {
    [Route ("api/[controller]")]
    public class MenuController : Controller {
        public MenuController () { }

        // GET api/menu
        [HttpGet ("")]
        public ActionResult<IEnumerable<Models.MenuItem>> Gets () {
            return new List<Models.MenuItem> {
                new Models.MenuItem { Id = 1, Name = "Fatura", PluginIdentifier = "PluginInvoice", PluginFilename = "plugin-invoice.js" },
                new Models.MenuItem { Id = 2, Name = "Stok", PluginIdentifier = "PluginStock", PluginFilename = "plugin-stock.js" },
                new Models.MenuItem { Id = 3, Name = "Depo", PluginIdentifier = "PluginWarehouse", PluginFilename = "plugin-invoice.js" }
            };
        }
    }
}