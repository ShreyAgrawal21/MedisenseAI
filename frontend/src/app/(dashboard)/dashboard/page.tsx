"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import WelcomeCard from "@/components/dashboard/WelcomeCard";
import StatsCards from "@/components/dashboard/StatsCards";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentReports from "@/components/dashboard/RecentReports";
import AIInsights from "@/components/dashboard/AIInsights";
import HealthTrend from "@/components/dashboard/HealthTrend";
import HealthTimeline from "@/components/dashboard/HealthTimeline";

import { DashboardResponse } from "@/types/dashboard";
import { getDashboard } from "@/services/dashboard";

export default function DashboardPage() {

    const router = useRouter();

    const [dashboard,setDashboard] =
        useState<DashboardResponse | null>(null);

    const [loading,setLoading] =
        useState(true);

    useEffect(()=>{

        async function load(){

            try{

                const data =
                    await getDashboard();

                setDashboard(data);

            }finally{

                setLoading(false);

            }

        }

        load();

    },[]);

    if(loading){

        return(

            <div className="p-10">

                Loading Dashboard...

            </div>

        );

    }

    if(!dashboard){

        return(

            <div className="p-10 text-red-500">

                Failed to load dashboard.

            </div>

        );

    }

    return(

        <div className="space-y-10">

            <WelcomeCard />

            <StatsCards

                totalReports={
                    dashboard.total_reports
                }

                abnormalReports={
                    dashboard.abnormal_reports
                }

                healthScore={
                    dashboard.health_score
                }

                healthStatus={
                    dashboard.health_status
                }

                lastUpload={
                    dashboard.last_upload
                }

            />

            <HealthTrend

                trends={dashboard.trends}

            />

            <HealthTimeline

                summary={dashboard.latest_summary}

            />

            <QuickActions />

            <div className="grid gap-8 xl:grid-cols-3">

                <div className="xl:col-span-2">

                    <RecentReports

                        reports={
                            dashboard.recent_reports
                        }

                        onOpenReport={(id)=>{

                            router.push(
                                `/analysis/${id}`
                            );

                        }}

                    />

                </div>

                <AIInsights

                    summary={
                        dashboard.latest_summary
                    }

                    onOpenAnalysis={()=>{

                        if(
                            dashboard.latest_analysis_id
                        ){

                            router.push(
                                `/analysis/${dashboard.latest_analysis_id}`
                            );

                        }

                    }}

                />

            </div>

        </div>

    );

}