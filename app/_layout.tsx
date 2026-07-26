import { Stack } from "expo-router";
import { useEffect } from "react";
import { initDB } from "@/db/database";


export default function _layout() {

  useEffect(()=>{},[
    initDB()
  ])
  
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    />
  )
}