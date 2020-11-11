using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatBotWorker
{
    class Program
    {
        static void Main(string[] args)
        {

            Task<bool> obTask = Task.Run(() => (

                Program.ScheduleTask()

            ));

        }
        public static bool ScheduleTask()
        {
            var ListPage = new List<long>();
            ListPage.Add(124707154243128);


            return true;
        }
    }
}
