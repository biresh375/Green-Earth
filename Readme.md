 1. What is the difference between var, let, and const?
### Ans: 
# var
 var হচ্ছে function scoped, এটা যেই ফাংশনের ভেতরে ডিক্লেয়ার করা হয় শুধু সেই ফাংশনের ভেতরে পাওয়া যাবে। যদি বাইরে ডিক্লেয়ার করো তাহলে পুরো প্রোগ্রামে পাওয়া যাবে। var hoist হয়, কিন্তু শুরুতে এর মান হয় undefined।  এক স্কোপের ভেতরে বারবার ডিক্লেয়ার করা যায়।
# let
let হচ্ছে block scoped ( { } এর ভেতরে থাকলেই শুধু পাওয়া যাবে)। let hoist হয়, কিন্তু initialize হয় না। তাই ডিক্লেয়ার করার আগে ব্যবহার করলে error  আসবে। একই scope এ আবার declare করা যায় না। মান পরিবর্তন করা যায়। যখন ভেরিয়েবল এর মান পরিবর্তন করতে হবে তখন ব্যবহার করা হয়।
# const
const block scoped। hoist হয়, কিন্তু initialize হয় না | ডিক্লেয়ার করার আগে ব্যবহার করলে error। একই scope এ declare করা যাবে না। নতুন মান দেওয়া যায় না। কিন্তু: যদি object বা array হয় তাহলে ভিতরের মান পরিবর্তন করা যাবে।


2) What is the difference between map(), forEach(), and filter()? 
### Ans:
# forEach()
শুধু লুপ চালায় প্রতিটি আইটেমের উপর। কিছু রিটার্ন করে না (সবসময় undefined দেয়)। মূলত side-effect (যেমন console.log, DOM update ইত্যাদি) করার জন্য ব্যবহার হয়।

# map()
প্রতিটি আইটেমের লুপ চালায়, নতুন একটি অ্যারে রিটার্ন করে। রিটার্ন করা মানগুলো দিয়ে নতুন অ্যারে তৈরি করে। মূল অ্যারে অপরিবর্তিত থাকে।

# filter()
প্রতিটি আইটেম চেক করে (true/false কন্ডিশন)। যেগুলো শর্ত পূরণ করে শুধু সেগুলো নিয়ে নতুন অ্যারে রিটার্ন করে। মূল অ্যারে পরিবর্তন হয় না।
3) What are arrow functions in ES6?
### Ans:
Arrow function হলো JavaScript (ES6 এ আসা) এর একটি short-hand function syntax : ()=>{} । 
এতে function লিখতে অনেক ছোট হয়, আর this keyword এর ব্যবহার ভিন্নভাবে কাজ করে।

4) How does destructuring assignment work in ES6?
### Ans:
ES6 এ destructuring assignment হলো এমন একটা ফিচার যেটা দিয়ে array বা object থেকে মান আলাদা করে ভেরিয়েবল এ রাখা যায় খুব সহজে। আলাদা আলাদা property/element বের করার জন্য বারবার dot (.) বা index ([]) লিখতে হয় না।

5) Explain template literals in ES6. How are they different from string concatenation?
### Ans:
Template Literals হলো ES6 এ আসা নতুন string syntax যেটা backtick (``) এর মধ্যে লেখা হয়।
এতে সহজে string এর মধ্যে variable বসানো যায় (interpolation)। multi-line string লেখা যায়। expression লেখা যায়।
# String Concatenation:
String Concatenation পুরনো পদ্ধতি + অপারেটর দিয়ে একাধিক string জোড়া দিতে হয়। Variable বসানো ঝামেলার বারবার + লিখতে হয়। Multi-line string লেখা কষ্টকর → \n ব্যবহার করতে হয়। 

# Template Literals (ES6)
Backtick (``) ব্যবহার হয়। Variable ও expression সরাসরি ${ } এর ভেতরে বসানো যায়। Multi-line string লেখা যায় সহজে, আলাদা করে \n দিতে হয় না। 