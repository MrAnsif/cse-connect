'use client'
import React from 'react'
import StudentDashboard from './components/StudentDashboard'
import TeacherDashboard from './components/TeacherDashboard'
import { useUserStore } from '@/lib/store/useUserStore'

const page = () => {
    const role = useUserStore((state) => state.role)

    if (!role) return <p>Loading...</p>

    return (
        <div>
            {role === 'student' && <StudentDashboard />}
            {role === 'teacher' && <TeacherDashboard />}
        </div>
    )
}

export default page