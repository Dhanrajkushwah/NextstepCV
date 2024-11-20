const mongoose = require("mongoose");

const basicInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    title: {
        type: String,
       
    },
    linkedin: {
        type: String,
       
    },
    github: {
        type: String,
       
    },
    email: {
        type: String,
       
    },
    phone: {
        type: String,
       
    }
});

const workExpSchema = new mongoose.Schema({
    title: {
        type: String,
       
    },
    companyName: {
        type: String,
       
    },
    certificationLink: {
        type: String,
       
    },
    location: {
        type: String,
        
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    points: {
       type: [String],
       
    }
});

const projectchmea = new mongoose.Schema({
    title: {
        type: String,
       
    },
    link: {
        type: String,
       
    },
    overview: {
        type: String,
       
    },
    github: {
        type: String,
        
    },
    points: {
        type: [String],
        
     }
});

const educationSchema = new mongoose.Schema({
    title: {
        type: String,
       
    },
    college: {
        type: String,
       
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
});

const achievementSchema = new mongoose.Schema({
    points: {
        type: [String],
       
    }
});

const summarySchema = new mongoose.Schema({
    summary: {
        type: String,
       
    }
});

const otherSchema = new mongoose.Schema({
    other: {
        type: String,
        
    }
});

const ResumeSchema = new mongoose.Schema(
    {
        basicInfo: [basicInfoSchema],
        workExp: [workExpSchema],
        project: [projectchmea],
        education: [educationSchema],
        achievement: [achievementSchema],
        summary: [summarySchema],
        other: [otherSchema],
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
);

const Resume = mongoose.model("Resume", ResumeSchema);

module.exports = Resume;
