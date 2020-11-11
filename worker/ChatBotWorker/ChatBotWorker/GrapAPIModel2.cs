using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatBotWorker
{
    public class GrapAPIModel2
    {
    }


    public class GrapAPIModel
    {
        public List<Datum> data { get; set; }
        public Paging2 paging { get; set; }
    }

    public class Datum2
    {
        public string name { get; set; }
        public string email { get; set; }
        public string id { get; set; }
    }

    public class Senders
    {
        public List<Datum2> data { get; set; }
    }

    public class From
    {
        public string name { get; set; }
        public string email { get; set; }
        public string id { get; set; }
    }

    public class Datum4
    {
        public string name { get; set; }
        public string email { get; set; }
        public string id { get; set; }
    }

    public class To
    {
        public List<Datum4> data { get; set; }
    }

    public class Datum3
    {
        public string message { get; set; }
        public DateTime created_time { get; set; }
        public From from { get; set; }
        public To to { get; set; }
        public string id { get; set; }
    }

    public class Cursors
    {
        public string before { get; set; }
        public string after { get; set; }
    }

    public class Paging
    {
        public Cursors cursors { get; set; }
        public string next { get; set; }
    }

    public class Messages
    {
        public List<Datum3> data { get; set; }
        public Paging paging { get; set; }
    }

    public class Datum
    {
        public Senders senders { get; set; }
        public string id { get; set; }
        public bool can_reply { get; set; }
        public string scoped_thread_key { get; set; }
        public Messages messages { get; set; }
    }

    public class Cursors2
    {
        public string before { get; set; }
        public string after { get; set; }
    }

    public class Paging2
    {
        public Cursors2 cursors { get; set; }
        public string next { get; set; }
    }



    public class SiteConfig
    {
        public string username { get; set; }
        public string userid { get; set; }
        public string pageid { get; set; }
        public string data { get; set; }
        public string id { get; set; }
        public DateTime? indexdate { get; set; }

        public DateTime? commentdate { get; set; }
    }


}
