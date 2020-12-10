import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
            selectedCategory: "",
            links: [
              // Niul
                {
                  name: "אופיס 365",
                  link: "https://www.office.com/",
                  image: "Office",
                  category: "niul",
                },
                {
                  name: "מערכת הסנכרון",
                  link: "https://syn-backoffice.medone.idf.il",
                  image: "SyncSystem",
                  category: "niul",
                },
                {
                  name: "ניהול משתמשים",
                  link: "https://ues.digital.idf.il",
                  image: "ManageUsers",
                  category: "niul",
                },
                {
                  name: "IDM",
                  link: "https://idm.medone.idf.il",
                  image: "Idm",
                  category: "niul",
                },
              

              // Mofet:
                {
                  name: "CRM - מופת",
                  link: "https://crm.medone.idf.il/",
                  image: "CrmMFT",
                  category: "mofet",
                },
                {
                  name: "ניתוח והצגת נתונים - מופת",
                  link: "https://mft-kibana.medone.idf.il/",
                  image: "AnalysisDataMFT",
                  category: "mofet",
                },
                {
                  name: "ניהול תוכן - מופת",
                  link: "https://mft-umbraco.medone.idf.il/",
                  image: "ManageContentMFT",
                  category: "mofet",
                },
                {
                  name: "הפקת דוחות - מופת",
                  link: "http://mft-backoffice.medone.idf.il/Reports/browse/",
                  image: "ProductReportsMFT",
                  category: "mofet",
                },
                {
                  name: "בקאופיס - מופת",
                  link: "https://mft-backoffice.medone.idf.il",
                  image: "BackOfficeMFT",
                  category: "mofet",
                },
                {
                  name: "SiSense - מופת",
                  link: "http://10.99.57.50:8081",
                  image: "Sisense",
                  category: "mofet",
                },
                {
                  name: "Nice - מופת",
                  link: "http://byidfnice-app.idfcc.il/Nice",
                  image: "Nice",
                  category: "mofet",
                },
                {
                  name: "ACE - מופת",
                  link: "http://10.99.57.19:7002",
                  image: "Ace",
                  category: "mofet",
                },
              

              // MTV:
                {
                  name: "ניתוח והצגת נתונים - מיטב",
                  link: "https://mgp-kibana.medone.idf.il/",
                  image: "AnalysisDataMTV",
                  category: "mtv",
                },
                {
                  name: "ניהול תוכן - מיטב",
                  link: "https://mgp-umbraco.medone.idf.il/Umbraco#/",
                  image: "ManageContentMTV",
                  category: "mtv",
                },
                {
                  name: "הפקת דוחות - מיטב",
                  link: "https://mgp-reports.medone.idf.il/ReportServer",
                  image: "ProductReportsMTV",
                  category: "mtv",
                },
                {
                  name: "בקאופיס - מיטב",
                  link: "https://mgp-backoffice.medone.idf.il/",
                  image: "BackOfficeMTV",
                  category: "mtv",
                },
                {
                  name: "CRM - מיטב",
                  link: "https://crm.medone.idf.il/",
                  image: "CrmMTV",
                  category: "mtv",
                },
                {
                  name: "SiSense - מיטב",
                  link: "http://10.99.57.50:8081",
                  image: "Sisense",
                  category: "mtv",
                },
                {
                  name: "Nice - מיטב",
                  link: "http://byidfnice-app.idfcc.il/Nice",
                  image: "Nice",
                  category: "mtv",
                },
                {
                  name: "ACE - מיטב",
                  link: "http://10.99.57.19:7000",
                  image: "Ace",
                  category: "mtv",
                },
              

              // Mkmshr:
                {
                  name: "מטופלים",
                  link: "https://mft-metupalim-backoffice.medone.idf.il",
                  image: "Patients",
                  category: "mkmshr",
                },
                {
                  name: "ניהול דוח 1",
                  link: "https://mftb-one-backoffice.medone.idf.il", //"https://one.prat.idf.il/"
                  image: "Doh1",
                  category: "mkmshr",
                },
                {
                  name: 'ACE - מקשמ"ר',
                  link: "http://10.99.57.18:5000",
                  image: "Ace",
                  category: "mkmshr",
                },
              
              // Mkrpr:
                {
                  name: "הקלטות",
                  link: "http://172.19.57.35",
                  image: "Recordings",
                  category: "mkrpr",
                },
                {
                  name: 'CRM - מקרפ"ר',
                  link: "https://crm.medone.idf.il/",
                  image: "CrmMkrpr",
                  category: "mkrpr",
                },
              
              //PreProd:
                {
                  name: "ניתוח והצגת נתונים - מופת",
                  link: "https://mftb-kibana.medone.idf.il/",
                  image: "AnalysisDataMFT",
                  category: "preprod",
                },
                {
                  name: "ניתוח והצגת נתונים - מיטב",
                  link: "https://mtg-kibana.medone.idf.il/",
                  image: "AnalysisDataMTV",
                  category: "preprod",
                },
                {
                  name: "ניהול תוכן - מופת",
                  link: "https://mftb-umbraco.medone.idf.il",
                  image: "ManageContentMFT",
                  category: "preprod",
                },
                {
                  name: "ניהול תוכן - מיטב",
                  link: "https://mtg-umbraco.medone.idf.il/Umbraco#/",
                  image: "ManageContentMTV",
                  category: "preprod",
                },
                {
                  name: 'ניהול דוח 1 - מקמש"ר',
                  link: "https://mft-one-backoffice.medone.idf.il ",
                  image: "Doh1",
                  category: "preprod",
                },
                {
                  name: 'מטופלים - מקרפ"ר',
                  link: "https://mftb-metupalim-backoffice.medone.idf.il",
                  image: "Patients",
                  category: "preprod",
                },
                {
                  name: "הפקת דוחות - מופת",
                  link: "http://mftb-backoffice.medone.idf.il/Reports/browse/",
                  image: "ProductReportsMFT",
                  category: "preprod",
                },
                {
                  name: "הפקת דוחות - מיטב",
                  link: "https://mtg-reports.medone.idf.il/ReportServer",
                  image: "ProductReportsMTV",
                  category: "preprod",
                },
                {
                  name: "בקאופיס - מופת",
                  link: "https://mftb-backoffice.medone.idf.il",
                  image: "BackOfficeMFT",
                  category: "preprod",
                },
                {
                  name: "בקאופיס - מיטב",
                  link: "https://mtg2-backoffice.medone.idf.il/",
                  image: "BackOfficeMTV",
                  category: "preprod",
                },
                {
                  name: 'CRM - מקרפ"ר',
                  link: "https://crm-beta.medone.idf.il/",
                  image: "CrmMkrpr",
                  category: "preprod",
                },
                {
                  name: "CRM - מופת",
                  link: "https://crm-beta.medone.idf.il/",
                  image: "CrmMFT",
                  category: "preprod",
                },
                {
                  name: "CRM - מיטב",
                  link: "https://crm-beta.medone.idf.il/",
                  image: "CrmMTV",
                  category: "preprod",
                }]
  },
  mutations: {

    selectedCategory(state, category){
      state.selectedCategory = category;
    },
  }
});
