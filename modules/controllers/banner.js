const fs = require("fs");
const BannerModel = require('../models/banner');

let countBanner = async(req,res,next) => {
    let countBanner = await BannerModel.count();
    return res.status(200).json({countBanner});
}

let GetBannerPagination = async(req,res,next) => {
    let searchText = req.body.filters.searchText;
    let searchObj = {};
    if (searchText) {
        searchObj = /^(?:\d*\.\d{1,2}|\d+)$/.test(searchText)
          ? {
              $or: [{ discount: searchText }, { price: searchText }],
            }
          : { title: new RegExp(`${searchText.toString().trim()}`, 'i') };
      }

    try {
      let limit = (req.body.limit) ? parseInt(req.body.limit) : 10;
      let page = req.body.page || 1;
        const bannerList = await BannerModel.find(searchObj)
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec();
        const countBanner = await BannerModel.count();
        
        let bannerData = { countBanner: 0 };
        bannerData.bannerList = bannerList;
        bannerData.countBanner = countBanner;
        return res.json(bannerData);
    } catch (error) {
        console.log(error);
    }
}
let GetAllBanner = async(req,res,next) => {
    try{
        const bannerList = await BannerModel.find({});
        return res.status(200).json(bannerList);
    }catch(error){
        console.log(error)
    }  
}
let GetSingleBanner = async(req,res,next) => {
    try{
        const singleBanner = await BannerModel.findOne({_id:req.params.id});
        return res.status(200).json(singleBanner);
    }catch(error){
        console.log(error);
    }
}
let CreateBanner = async(req,res,next) => {
    const bannerData = {
        title:req.body.title,
        image: req.file.filename,
    }
    try{
        let countBanner = await BannerModel.count();
        if(countBanner == 15){
            return res.status(400).json("Banner limit is over to 15");
        }
        const createBanner = await BannerModel.create(bannerData);
        return res.status(200).json('Banner created successfully');
    }catch(error){
        console.log(error);
    }
}
let UpdateBanner = async(req,res,next) => {
    try{
        const id = req.params.id;
        const bannerData = {
            title:req.body.title
        }
        const updateBanner = await BannerModel.findByIdAndUpdate(id,{$set:bannerData},{new:true});
        return res.status(200).json('Banner update successfully');
    }catch(error){
        console.log(error);
    }
}
let DeleteBanner = async(req,res,next) => {
    try{
        const id = req.params.id;
        const singleBanner = await BannerModel.findOne({_id:id});
        const singleImage = await singleBanner.image;
        await fs.unlinkSync('./public/banner-image/'+singleImage);
        const deleteBanner = await BannerModel.findByIdAndRemove(id);
        return res.status(200).json('Banner delete successfully');
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    countBanner,
    GetBannerPagination,
    GetAllBanner,
    GetSingleBanner,
    CreateBanner,
    UpdateBanner,
    DeleteBanner,
}