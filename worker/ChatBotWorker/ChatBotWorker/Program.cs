using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using System.Configuration;
using MongoDB.Driver;
using MongoDB.Bson;

namespace ChatBotWorker
{

    //https://developers.facebook.com/tools/explorer/652999908626799/?method=GET&path=112588937315601%2Fconversations%3Ffields%3Dsenders%2Cid%2Ccan_reply%2Cscoped_thread_key%2Cmessages.limit(1)%7Bmessage%2Cfrom%7D%26limit%3D50&version=v8.0
    // 112588937315601/conversations?fields=senders,id,can_reply,scoped_thread_key,messages.limit(1){message,from}&limit=50
    class Program
    {
        static void Main2(string[] args)
        {
            try
            {
                string FBTokens = ConfigurationManager.AppSettings["CHATBOT_FB_TOKEN"];
            }catch(Exception e)
            {

            }
            Console.WriteLine("hihi2");

            Console.ReadKey();

        }


        static DateTime LastUpdate = DateTime.Now;
        public static string FBToken = ConfigurationManager.AppSettings["CHATBOT_FB_TOKEN"];
        public static string MongoUrl = ConfigurationManager.AppSettings["CHATBOT_MONGO_URL"];
        public static string DBName = ConfigurationManager.AppSettings["CHATBOT_MONGO_DBNAME"];
        static string CollectionName = "chatThread";

        static MongoClient client = new MongoClient(MongoUrl);
        static IMongoDatabase database = client.GetDatabase(DBName);
        static IMongoCollection<BsonDocument> collection = database.GetCollection<BsonDocument>(CollectionName);
        static void Main(string[] args)
        {
            if(database == null)
            {
                database = client.GetDatabase(DBName);
            }
            if(collection == null)
            {
                collection = database.GetCollection<BsonDocument>(CollectionName);
            }

            GetDataFb(112588937315601);

            Program.ScheduleTask();
            //Task<bool> obTask = Task.Run(() => (

            //    Program.ScheduleTask()

            //));

        }
        public static bool ScheduleTask()
        {
            var ListPage = new List<long>();
            ListPage.Add(112588937315601); // MWG BOT

            for (int i = 0; i < 1000000000; i++)
            {


                foreach (var page in ListPage)
                {


                    Task<bool> obTask = Task.Run(() => (

                        Program.GetDataFb(page)

                    ));

                }
                Thread.Sleep(30000);
                LastUpdate = DateTime.Now;
            }

            return true;
        }

        public static bool GetDataFb(long page)
        {
            WebClient wc = new WebClient();
            //string token = "EAAUEMk218hkBAD48p9Wp4cEgGeAuq4vLz0PB4NjUi7CfXyRW6yYrlhylUCOai1q9WeBrV7ZBNY4ZAF0tOoYOEUZCZByMMA2HH6Q6WtZBaiJChSsF6xjrLIZAUENlYRyuvRy2ljtAZB1WlDA9PzvVqYkZCx6HZAQKgfP7SoqugurTGXQZDZD";


            string token = Program.FBToken;
            Console.WriteLine("TOKEN: " + token);
            try
            {
                string Url = @"https://graph.facebook.com/v7.0/" + page + "/conversations?fields=senders,id,can_reply,scoped_thread_key,messages.limit(1){message,from}&limit=20&access_token=" + token;// );

                var request = (HttpWebRequest)WebRequest.Create(Url);
                request.Method = "GET";
                request.ContentType = "application/json";

                WebResponse response = request.GetResponse();
                var responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();

                GrapAPIModel conc = JsonConvert.DeserializeObject<GrapAPIModel>(responseString);
                //GrapAPIModel
                if (conc != null && conc.data != null && conc.data.Count > 0)
                {
                    foreach (var iten in conc.data)
                    {


                        if (long.Parse(iten.messages.data[0].from.id) != page)
                        {
                            //var urll = "http://www.thegioididong.com/qtcm/fb/exeUpdateConversation?conversationid=" + iten.id + "&pageid=" + page;
                            //string xx = wc.DownloadString(urll);

                            // IMSERT CHAT VÀO MONGODB

                            //if (CmtSvc.InsertArrchiveChat(page, iten.id) > 0)
                            //{
                            //    Console.WriteLine("NOTIFY: insert chat new customer\n");
                            //}

                            BsonDocument document = new BsonDocument()
                                .Add("_id", iten.id) // System.Guid.NewGuid().ToString()
                                .Add("FbID", iten.id)
                                .Add("CustomerName", iten.senders.data[0].name)
                                .Add("LastMessage", iten.messages.data[0].message)
                                .Add("IsChiem", 0);
                            
                            collection.InsertOne(document);

                            //https://laptrinhvb.net/bai-viet/devexpress/---Csharp----Huong-dan-them-xoa-sua-trong-database-MongoDB-/b8ac97af5e995b8b.html

                        }



                    }
                }

            }
            catch (Exception e)
            {
                Console.WriteLine("Loi xay ra:" + e);
            }
            return true;
        }

    }
}
