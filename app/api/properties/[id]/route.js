import connectDB from '@/config/database';
import Property from '@/models/Property';

export const GET = async (request, { params }) => {
  try {
    connectDB();
    const property = await Property.findById(params.id);
    if (!property) {
      return new Response(JSON.stringify({ message: 'Property not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(property, {
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
