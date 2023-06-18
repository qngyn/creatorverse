import { createClient } from '@supabase/supabase-js';

const URL = 'https://arictkdglhjspdlushvy.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyaWN0a2RnbGhqc3BkbHVzaHZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyODI1NzksImV4cCI6MjAwMTg1ODU3OX0.ZAyB9lH96nndkkRsgIIwxW-QI8TLy_os1M20KLa_ODQ';

export const supabase = createClient(URL, API_KEY);
