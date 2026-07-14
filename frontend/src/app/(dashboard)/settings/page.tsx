"use client";

import { useEffect, useState } from "react";
import AccountSettings from "@/components/settings/AccountSettings";
import AppearanceSettings from "@/components/settings/AppearanceSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import SecuritySettings from "@/components/settings/SecuritySettings";
import PrivacySettings from "@/components/settings/PrivacySettings";
import { getProfile, Profile } from "@/services/profile";
import { updateSettings, changePassword } from "@/services/settings";

export default function SettingsPage() {
 const [profile,setProfile]=useState<Profile|null>(null);
 const [loading,setLoading]=useState(true);
 const [saving,setSaving]=useState(false);
 const [darkMode,setDarkMode]=useState(false);
 const [language,setLanguage]=useState("en");
 const [emailNotifications,setEmailNotifications]=useState(true);
 const [aiNotifications,setAiNotifications]=useState(true);
 const [reportNotifications,setReportNotifications]=useState(true);
 const [healthAlerts,setHealthAlerts]=useState(true);

 useEffect(()=>{(async()=>{
   try{
    const p=await getProfile();
    setProfile(p);
    setDarkMode(p.dark_mode);
    setEmailNotifications(p.email_notifications);
    setAiNotifications(p.ai_notifications);
   }finally{setLoading(false);}
 })();},[]);

 async function handleSave(){
   setSaving(true);
   try{
     await updateSettings({
       dark_mode:darkMode,
       email_notifications:emailNotifications,
       ai_notifications:aiNotifications,
     });
     alert("Settings updated successfully.");
   }finally{setSaving(false);}
 }

 async function handleChangePassword(currentPassword:string,newPassword:string){
   await changePassword({current_password:currentPassword,new_password:newPassword});
 }

 function handleExport(){
   if(!profile)return;
   const blob=new Blob([JSON.stringify(profile,null,2)],{type:"application/json"});
   const url=URL.createObjectURL(blob);
   const a=document.createElement("a");
   a.href=url;a.download="profile.json";a.click();
   URL.revokeObjectURL(url);
 }

 if(loading||!profile){
   return <div className="flex h-96 items-center justify-center"><h2 className="text-xl font-semibold">Loading Settings...</h2></div>;
 }

 return (
 <div className="space-y-8">
   <AccountSettings profile={profile}/>
   <AppearanceSettings darkMode={darkMode} language={language} onDarkModeChange={setDarkMode} onLanguageChange={setLanguage}/>
   <NotificationSettings
      emailNotifications={emailNotifications}
      aiNotifications={aiNotifications}
      reportNotifications={reportNotifications}
      healthAlerts={healthAlerts}
      onEmailChange={setEmailNotifications}
      onAIChange={setAiNotifications}
      onReportChange={setReportNotifications}
      onHealthAlertChange={setHealthAlerts}
   />
   <SecuritySettings onChangePassword={handleChangePassword}/>
   <PrivacySettings
      onExport={handleExport}
      onDownloadReports={()=>alert("Reports download will be added in the next update.")}
      onDeleteAccount={()=>{if(window.confirm("Delete your account?")) alert("Delete account API coming next.");}}
   />
   <div className="flex justify-end gap-4">
      <button onClick={()=>window.location.reload()} className="rounded-xl border border-slate-300 px-6 py-3 hover:bg-slate-100">Cancel</button>
      <button onClick={handleSave} disabled={saving} className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50">
        {saving?"Saving...":"Save Settings"}
      </button>
   </div>
 </div>);
}
