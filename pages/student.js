import Image from 'next/image';
import React from 'react';

const Students = () => {
  return (
    <div className="students p-8 mt-14 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Students</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Life at Springdale</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>
              <strong>Extracurricular Activities:</strong> Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
            </li>
            <li>
              <strong>Clubs and Societies:</strong> Literary Society, Environmental Club, Astronomy Club, Coding Club
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>John Smith - National Level Math Olympiad Winner</li>
            <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
            <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Student Council</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 sm:p-12 dark:bg-gray-50 dark:text-gray-800">
	<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
		<img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
		<div className="flex flex-col">
			<h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
			<p className="dark:text-gray-600">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
		</div>
	</div>
	
</div>
          {/* <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src='/studentfemale.png'
            alt="Lisa Wong" 
            width={150} 
            height={150} 
            className="rounded-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">President</h3>
            <p className="text-lg text-gray-700">Amy Parker</p>
            <p className="text-lg text-gray-600">Grade 12</p>
          </div> */}
          <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src='/studentmale.png'
            alt="Lisa Wong" 
            width={150} 
            height={150} 
            className="rounded-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">Vice President</h3>
            <p className="text-lg text-gray-700">Rajiv Mehta</p>
            <p className="text-lg text-gray-600">Grade 11</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
          <Image
            src='/studentfemale.png'
            alt="Lisa Wong" 
            width={150} 
            height={150} 
            className="rounded-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secretary</h3>
            <p className="text-lg text-gray-700">Lisa Wong</p>
            <p className="text-lg text-gray-600">Grade 10</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;