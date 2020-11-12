using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatBotWorker.Model
{
    public class ChatBO
    {
        [BsonId]
        public string _id { get; set; }
        public string FbID { get; set; }
        public string CustomerName { get; set; }
        public string LastMessage { get; set; }
        public int IsChiem { get; set; }
    }
}

