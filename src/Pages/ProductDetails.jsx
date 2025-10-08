import React, { useState } from 'react';
import { useParams } from 'react-router';
import useProducts from '../Components/Hooks/useProducts';
import { ToastContainer, toast } from 'react-toastify';
import downloadImg from '../assets/icon-downloads.png';
import iconImg from '../assets/icon-ratings.png';
import reviewImg from '../assets/icon-review.png';
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Rectangle,
} from 'recharts';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useProducts();
  const product = products.find((p) => String(p.id) === id);
  const [installed, setInstalled] = useState(false);

  if (loading) return <p>Loading......</p>;
  if (!product) return <p>Product not found</p>;

  const { title, image, size, downloads, reviews, ratingAvg, companyName } = product;

  //  Handle Install Button Click
  const handleAddToInstall = () => {
    setInstalled(true);
    toast("✅ App Installed Successfully");

    const existingList = JSON.parse(localStorage.getItem('install'));
    let updatedList = [];

    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === product.id);
      if (isDuplicate) return;
      updatedList = [...existingList, product];
    } else {
      updatedList.push(product);
    }

    localStorage.setItem('install', JSON.stringify(updatedList));
  };

  //  Chart Data
  const chartData = products.map((p) => ({
    title: p.title,
    rating: p.ratingAvg,
    downloads: p.downloads,
  }));

  return (
    <div className="bg-[#F5F5F5] pt-20">
     
      <div className="card bg-base-100 max-w-7xl mx-auto">
        <div className="md:flex bg-[#F5F5F5] gap-10">
          {/* Left Image */}
          <div>
            <figure className="h-[316px] overflow-hidden">
              <img
                className="h-full w-full object-cover rounded-3xl p-4"
                src={image}
                alt={title}
              />
            </figure>
          </div>

          {/* Right Content */}
          <div className="card-body">
            <h2 className="card-title text-4xl font-bold">{title}</h2>
            <h3 className="text-lg font-medium">Developed by: {companyName}</h3>

            {/* Ratings Section */}
            <div className="pt-4 flex gap-8">
              <div>
                <img src={downloadImg} alt="" />
                <p className="py-2">Downloads</p>
                <p className="text-3xl font-bold">{downloads}M</p>
              </div>
              <div>
                <img src={iconImg} alt="" />
                <p className="py-2">Average Ratings</p>
                <p className="text-3xl font-bold">{ratingAvg}</p>
              </div>
              <div>
                <img src={reviewImg} alt="" />
                <p className="py-2">Total Reviews</p>
                <p className="text-3xl font-bold">{reviews}k</p>
              </div>
            </div>

            {/* Install Button */}
            <div className="pt-4">
              <button
                disabled={installed}
                onClick={handleAddToInstall}
                className={`text-white text-xl font-semibold py-2 px-5 rounded-sm transition-all duration-300 ease-in-out 
                  ${
                    installed
                      ? 'bg-[#00D390] cursor-not-allowed'
                      : 'bg-[#00D390] hover:scale-105 hover:bg-[#00b87f]'
                  }`}
              >
                {installed ? 'Installed' : `Install Now (${size} MB)`}
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>

      
      <div className="space-y-3 max-w-7xl mx-auto pt-10 pb-20 px-4">
        <h2 className="text-2xl font-semibold">App Ratings & Downloads</h2>
        <div className="bg-base-100  h-80 p-2">
          {chartData.length > 0 && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="downloads"
                  fill="#00D390"
                  name="Downloads (M)"
                  activeBar={<Rectangle fill="lightgreen" stroke="green" />}
                />
                <Bar
                  dataKey="rating"
                  fill="#FF8811"
                  name="Average Rating"
                  activeBar={<Rectangle fill="gold" stroke="orange" />}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-5'>
        <h1 className='text-2xl font-semibold'>Description</h1>
        <div>
          <p className='pt-6 text-[#6B7B89]'>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>
          <p className='py-10 text-[#6B7B89]'>A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.</p>
          <p className='pb-20 text-[#6B7B89]'>For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
