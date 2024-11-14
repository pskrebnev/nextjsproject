import connectDB from '@/config/database';
import Property from '@/models/Property';

export const GET = async () => {
  try {
    connectDB();
    const properties = await Property.find({}).lean();
    return new Response(JSON.stringify(properties), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: error.message + ' -> Something went wrong' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
