import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { transformData } from '@/utils/transformData';

export async function POST (res:NextRequest) {
  const body = await res.json();

  try {
    // Validación de la solicitud
    if (!body.url) {
      return NextResponse.json({ message: 'The request must contain a valid URL.' });
    }

    const options = {
      method: 'GET',
      params: {
        url: body.url
      },
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY_MEDIA_DOWNLOADER,
        'X-RapidAPI-Host': process.env.API_HOST_MEDIA_DOWNLOADER
      }
    };

    const API_URL = String(process.env.API_URL_MEDIA_DOWNLOADER);

    const { data } = await axios.get(API_URL, options);
    const dataTransformed = transformData(data);

    return NextResponse.json(dataTransformed);
  } catch (err) {
    return NextResponse.json({ message: 'There was an error in the application.' });
  }
}
