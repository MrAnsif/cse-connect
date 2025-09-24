'use client'
import { useUser } from '@clerk/nextjs'
import React from 'react'
import StudentDashboard from '../components/dashboard/StudentDashboard'
import TeacherDashboard from '../components/dashboard/TeacherDashboard'

const page = () => {
    const { user } = useUser()
    const role = user?.publicMetadata?.role
    return (
        <div>
            {role === 'student' && <StudentDashboard />}
            {role === 'teacher' && <TeacherDashboard />}
        </div>
    )
}

export default page