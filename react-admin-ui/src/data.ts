



  // const storedUser = localStorage.getItem("user")

    // const parsedUser = storedUser ? JSON.parse(storedUser) : null
    // const userEmail = parsedUser.data?.email;
    // const userImg = parsedUser?.data?.picture;
    // const userName = parsedUser?.data?.name;


   
    const userImg = JSON.parse(localStorage.getItem("user") || "{}").data?.picture
    const userName = JSON.parse(localStorage.getItem("user") || "{}").data?.name
 


export const menu = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Home",
          url: "/",
          icon: "home.svg",
          pulse: false,
          new: false
        },
        {
          id: 2,
          title: "Instruments",
          url: "/project",
          icon: "chart.svg",
          pulse: true,
          new: true
        },
      ],
    },
    {
      id: 2,
      title: "lists",
      listItems: [
        {
          id: 1,
          title: "Technicians",
          url: "/engine",
          icon: "user.svg",
          pulse: false,
          new: false
        },
        {
          id: 2,
          title: "Products",
          url: "/products",
          icon: "product.svg",
          pulse: false,
          new: false
        },
        {
          id: 3,
          title: "Orders 🔒",
          url: "/",
          icon: "order.svg",
          pulse: false,
          new: false
        },
        {
          id: 4,
          title: "Import 🔒",
          url: "/",
          icon: "post2.svg",
          pulse: false,
          new: false
        },
      ],
    },
    {
      id: 3,
      title: "general",
      listItems: [
        {
          id: 1,
          title: "Investors 🔒",
          url: "/",
          icon: "element.svg",
          pulse: false,
          new: false
        },

        {
          id: 2,
          title: "Forms 🔒",
          url: "/",
          icon: "form.svg",
          pulse: false,
          new: false
        },
        {
          id: 3,
          title: "Booking 🔒",
          url: "/",
          icon: "calendar.svg",
          pulse: false,
          new: false
        },
      ],
    },
    {
      id: 4,
      title: "Maintenance",
      listItems: [
        {
          id: 1,
          title: "Settings 🔒",
          url: "/",
          icon: "setting.svg",
          pulse: false,
          new: false
        },
        {
          id: 2,
          title: "Backups 🔒",
          url: "/",
          icon: "backup.svg",
          pulse: false,
          new: false
        },
      ],
    },
    {
      id: 5,
      title: "analytics",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/",
          icon: "chart.svg",
          pulse: false,
          new: false
        },
        {
          id: 2,
          title: "Logs",
          url: "/",
          icon: "log.svg",
          pulse: false,
          new: false
        },
      ],
    },
    {
      id: 6,
      title: "DOC",
      listItems: [
        {
          id: 1,
          title: "More 🔒",
          url: "",
          icon: "log.svg",
          onclick: true,
          pulse: false,
          new: false
        },
        
      ],
    },
  ];
  
  export const topDealUsers = [
    
    {
      id: 1,
      img: userImg,
      username:  `${userName}`,
      email:  "Administrator",
      amount: "100,000",
      verified: "twitter.svg"
    },
    ,
    
    
    
    
    {
      id: 2,
      img: "https://www.thefamouspeople.com/profiles/images/nikola-tesla-11.jpg",
      username: "Nash",
      email: "Tesla-X",
      amount: "76,390",
      verified: "twitter.svg"
    },
    {
      id: 4,
      img: "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1ZMmF4ZU0zZWNYWWpQM3ZFaFl6N0V6Y2hyakZkZmhVUTljWUVNTGs0OTQ3by9pbWFnZS5qcGVn",
      username: "Linnie Nelson",
      email: "Tesla-S",
      amount: "76,790",
      verified: "twitter.svg"
    },
    {
      id: 5,
      img: "https://beincrypto.com/wp-content/uploads/2023/08/ciaran-lyons-avatar.png",
      username: "Brent Reeves",
      email: "BMW-EV-i8",
      amount: "65,699",
      verified: "twitter.svg"
    },
    {
      id: 6,
      img: "https://image.lexica.art/full_webp/5f682587-ad53-44ef-9067-8c3bf1ed48a6",
      username: "Adeline Watson",
      email: "Alphard-EV-77",
      amount: "63,099",
      verified: "twitter.svg"
    },
   
    {
      id: 8,
      img: "https://geekxgirls.com/images/cosplay89/tesla-cat-girl-cosplay-04.jpg",
      username: "Augusta McGee",
      email: "Mini Cooper-EV",
      amount: "59,000",
      verified: "twitter.svg"
    },
   
  ];
  
  export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Leads",
    number: "11238",
    dataKey: "users",
    percentage: 45,
    chartData: [
      { name: "Sun", users: 400 },
      { name: "Mon", users: 600 },
      { name: "Tue", users: 500 },
      { name: "Wed", users: 700 },
      { name: "Thu", users: 400 },
      { name: "Fri", users: 500 },
      { name: "Sat", users: 450 },
    ],
  };
  
  export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Buyers",
    number: "3238",
    dataKey: "products",
    percentage: 21,
    chartData: [
      { name: "Sun", products: 400 },
      { name: "Mon", products: 600 },
      { name: "Tue", products: 500 },
      { name: "Wed", products: 700 },
      { name: "Thu", products: 400 },
      { name: "Fri", products: 500 },
      { name: "Sat", products: 450 },
    ],
  };
  export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$32M",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
  };
  export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Ratio L/B",
    number: "3.5",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
      { name: "Sun", ratio: 400 },
      { name: "Mon", ratio: 600 },
      { name: "Tue", ratio: 500 },
      { name: "Wed", ratio: 700 },
      { name: "Thu", ratio: 400 },
      { name: "Fri", ratio: 500 },
      { name: "Sat", ratio: 450 },
    ],
  };
  
  export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",  //-------> set as metric for quantitative key indicator (y-axis)
    chartData: [
      {
        name: "Sun",
        profit: 41300,
      },
      {
        name: "Mon",
        profit: 33400,
      },
      {
        name: "Tue",
        profit: 23400,
      },
      {
        name: "Wed",
        profit: 25678,
      },
      {
        name: "Thu",
        profit: 16890,
      },
      {
        name: "Fri",
        profit: 26390,
      },
      {
        name: "Sat",
        profit: 32300,
      },
    ],
  };
  
  export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "hq",
   chartData: [
      {
        name: "Rania",
        hq: 1200,
      },
      {
        name: "Icad",
        hq: 1400,
      },
      {
        name: "Ilham",
        hq: 1300,
      },
      {
        name: "Inara",
        hq: 1500,
      },
      {
        name: "Hasya",
        hq: 1700,
      },
      {
        name: "Raisya",
        hq: 1700,
      },
      {
        name: "Fatih",
        hq: 2100,
      },
    ],
  };
  
  export const userRows = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Hubbard",
      firstName: "Eula",
      email: "kewez@@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Manning",
      firstName: "Stella",
      email: "comhuhmit@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Greer",
      firstName: "Mary",
      email: "ujudokon@hottmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williamson",
      firstName: "Mildred",
      email: "tinhavabe@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Gross",
      firstName: "Jose",
      email: "gobtagbes@yahoo.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Sharp",
      firstName: "Jeremy",
      email: "vulca.eder@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Lowe",
      firstName: "Christina",
      email: "reso.bilic@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dean",
      firstName: "Garrett",
      email: "codaic@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Parsons",
      firstName: "Leah",
      email: "uzozor@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Reid",
      firstName: "Elnora",
      email: "tuhkabapu@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dunn",
      firstName: "Gertrude",
      email: "gibo@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williams",
      firstName: "Mark",
      email: "tic.harvey@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Cruz",
      firstName: "Charlotte",
      email: "ceuc@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 14,
      img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Harper",
      firstName: "Sara",
      email: "bafuv@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 15,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Griffin",
      firstName: "Eric",
      email: "ubi@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
  ];
  
  export const products = [
    {
      id: 1,
      img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
      title: "Playstation 5 Digital Edition",
      color: "white",
      producer: "Sony",
      price: "$250.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 2,
      img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
      title: "Dell Laptop KR211822",
      color: "black",
      producer: "Dell",
      price: "$499.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 3,
      img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
      title: "Samsung TV 4K SmartTV",
      color: "gray",
      producer: "Samsung",
      price: "$999.49",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 4,
      img: "https://raylo.imgix.net/iphone-14-blue.png",
      title: "Apple Iphone 14 Pro Max",
      color: "white",
      producer: "Apple",
      price: "$799.49",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 5,
      img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
      title: "Philips Hue Play Gradient",
      color: "rainbow",
      producer: "Philips",
      price: "$39.99",
      createdAt: "01.02.2023",
    },
    {
      id: 6,
      img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
      title: "Logitech MX Master 3",
      color: "black",
      producer: "Logitech",
      price: "$59.49",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 7,
      img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
      title: "Rode Podcast Microphone",
      color: "gray",
      producer: "Rode",
      price: "$119.49",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
      title: "Toshiba Split AC 2",
      color: "white",
      producer: "Toshiba",
      price: "$899.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 9,
      img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
      title: "Sony Bravia KDL-47W805A",
      color: "black",
      producer: "Sony",
      price: "$970.49",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
      title: "Acer Laptop 16 KL-4804",
      color: "black",
      producer: "Acer",
      price: "$599.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
  ];
  
  
  
  export const singleUser = {
    id: 1,
    title: "John Doe",
    img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    info: {
      username: "Johndoe99",
      fullname: "John Doe",
      email: "johndoe@gmail.com",
      phone: "123 456 789",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "John Doe purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "John Doe added 3 items into their wishlist",
        time: "1 week ago",
      },
      {
        text: "John Doe purchased Sony Bravia KD-32w800",
        time: "2 weeks ago",
      },
      {
        text: "John Doe reviewed a product",
        time: "1 month ago",
      },
      {
        text: "John Doe added 1 items into their wishlist",
        time: "1 month ago",
      },
      {
        text: "John Doe reviewed a product",
        time: "2 months ago",
      },
    ],
  };
  export const singleProduct = {
    id: 1,
    title: "Playstation 5 Digital Edition",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    info: {
      productId: "Ps5SDF1156d",
      color: "white",
      price: "$250.99",
      producer: "Sony",
      export: "Japan",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          orders: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          orders: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          orders: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          orders: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          orders: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          orders: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          orders: 4300,
        },
      ],
    },
    activities: [
      {
        text: "John Doe purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
        time: "1 week ago",
      },
      {
        text: "Mike Doe purchased Playstation 5 Digital Edition",
        time: "2 weeks ago",
      },
      {
        text: "Anna Doe reviewed the product",
        time: "1 month ago",
      },
      {
        text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
        time: "1 month ago",
      },
      {
        text: "Helen Doe reviewed the product",
        time: "2 months ago",
      },
    ],
  };