using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Data.SqlClient;
using System.Data;
using WebAppLP.Models;

namespace WebAppLP.Pages
{
    public class CollectionModel : PageModel
    {
        public List<AppModel> Listapps = new List<AppModel>();
        private readonly string connectionString;
        public CollectionModel(IConfiguration config)
        {
            connectionString = config.GetConnectionString("Default")!;
        }

        public void OnGet()
        {
            try
            {
                using (var connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    var sql = "SELECT * FROM Apps";
                    Listapps = connection.Query<AppModel>(sql).AsList();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred: {ex.Message}");
            }
        }
    }
}
