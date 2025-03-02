<template>
  <div>
    <h1>User Settings Portal</h1>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import LoadingBookingItem from '@/components/LoadingBookingItem.vue'
import BookingItem from '@/components/BookingItem.vue'
import EventList from '@/components/EventList.vue'

const bookings = ref([])
const bookingsLoading = ref(false)
const fetchBookings = async () => {}

const findBookingsById = (id) => bookings.value.findIndex((b) => b.id === id)

const handleRegistration = async (event) => {}


</script>


