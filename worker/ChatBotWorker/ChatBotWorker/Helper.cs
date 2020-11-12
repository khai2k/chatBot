using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace ChatBotWorker
{
    class Helper
    {
        static Dictionary<string, DateTime> lastsendLine = new Dictionary<string, DateTime>();
        public static void NotifyLine_Chat(string key, string msg)
        {
            if (lastsendLine.ContainsKey(key))
            {
                if (lastsendLine[key] < DateTime.Now)
                {

                    lastsendLine[key] = DateTime.Now.AddMinutes(10); ;
                }
                else
                {
                    return;
                }
            }
            else
            {
                lastsendLine[key] = DateTime.Now.AddMinutes(10);
            }

            try
            {


                WebClient wc4 = new WebClient();
                string targetAddress4 = "https://notify-api.line.me/api/notify";
                wc4.Encoding = Encoding.UTF8;
                wc4.Headers[HttpRequestHeader.ContentType] = "application/x-www-form-urlencoded";
                wc4.Headers["Authorization"] = "Bearer JojeQA5HP50e1bq3L8Fdb5Jc3BdzgPkOdRsC1C9cxFO"; // log chatbotfb
                //"DLiXBMUgHaPmip06CVT8CkYoA6oRxnGQsOhlEURvpyl";// logchat
                //Bearer TOKEN_FROM_STEP3
                NameValueCollection nc4 = new NameValueCollection();
                nc4["message"] = msg;

                byte[] bResult4 = wc4.UploadValues(targetAddress4, nc4);
                string result4 = Encoding.UTF8.GetString(bResult4);
                Console.Write(result4);
            }
            catch (Exception)
            {


            }
        }
    }
}
