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
        //public int IsChiem { get; set; }
        public int IsReply { get; set; }
        public int CurentUserSupport { get; set; }
        public string ListUserSupport { get; set; }
        public DateTime BeginDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public DateTime MessageUpdatedDate { get; set; }

    }
}

