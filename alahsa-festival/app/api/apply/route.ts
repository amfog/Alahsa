import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, contactName, email, phone, tier, boothSize, description } = body;

    const { error } = await supabase
      .from('applications')
      .insert([
        {
          company_name: companyName,
          contact_name: contactName,
          email,
          phone,
          tier,
          booth_size: boothSize,
          description,
        },
      ]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
  }
}
