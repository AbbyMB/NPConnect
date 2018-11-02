# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Program.create(name: "Green and Healthy Homes", description: "A comprehensive housing assessment and improvement program", category: "housing", user_id: 2)
Program.create(name: "Pop Up Play", description: "A mobile program that facilitates active learning through unstructured play", category: "child health", user_id: 2)
Program.create(name: "Walking School Bus", description: "Description: This program provides safe and supervised walking routes for children in urban school districts", category: "education", user_id: 1)
Program.create(name: "Meals On Wheels", description: "Meals are delivered to homes of those with inconsistent food access and limited transportation options", category: "food assistance", user_id: 1)

Funder.create(title: "Charles Stewart Mott Foundation/Youth Service Alliance", description: "2019 MLK Day of Service Grants ($1,000) are available to youth development organizations, community-based organizations, and schools in order to effectively recruit and engage youth volunteers in meaningful service activities on MLK Day of Service weekend.", url: "https://www.mott.org/news/releases/", category: "social justice")

Funder.create(title: "Liberty Mutual Foundation", description: "Funding Goal: to address housing instability and other services for teens and young adults. This solicitation builds upon the work of the United States Interagency Council on Homelessness, A Way Home America, the Recommendations of the City of Boston Plan, local Continuums of Care and other area alliances working collaboratively to make youth homelessness, rare brief and non-recurring. We have to positively impact the lives of those ages 14-25 years with this funding, by listening to young people and by forming collaborations between and among youth serving organizations. Projects that are developed by more than one agency may be given extra priority in funding decisions.", url: "https://www.libertymutualgroup.com/about-lm/philanthropy/philanthropy/liberty-mutual-foundation",category: "housing")

Funder.create(title: "The Youth Initiative Fund", description: "The Youth Initiative Fund was initiated seven years ago by the Division of International
Protection in Geneva to support community based protection projects imagined, designed and
led by young people. Since 2014, the YIF has supported more than 100 youth led projects
globally that have addressed protection challenges including sexual and gender-based
violence, peaceful coexistence, child protection and psychosocial wellbeing. The maximum grant is $10,000.", url: "http://unkt.org/2018/10/11/unhcr-call-proposals-youth-initiative-fund/", category: "youth development")

Funder.create(title: "Resist", description: "Supports people's movements for justice and liberation. Applications are due four times per year. Grants range from $1,000 to $4,000", url: "https://resist.org/grants/programs", category: "social justice")

Funder.create(title: "World Bank/Wharton School", description: "Today’s youth will be responsible for implementing the 2030 Agenda and Sustainable Development Goals, approved by the UN in September 2015. UN member states have endorsed a financing for development action agenda, outlining action areas and commitments for the international community. Youth engagement and innovation will be critical for success. The Ideas for Action competition engages young people from around the world to encourage them to develop and share their ideas for financing solutions to deliver the SDGs", url: "http://www.ideas4action.org/2019-ideas-for-action-guidelines/", category: "youth development")

Funder.create(title: "National Parks Service", description: "Save America's Treasures grants from the Historic Preservation Fund provide preservation and/or conservation assistance to nationally significant historic properties and collections. These grants are administered by the National Park Service in partnership with the National Endowment for the Arts, the National Endowment for the Humanities, and the Institute of Museum and Library Services. Grants range from $25,000 to $500,000 and require a dollar-for-dollar match.", url: "https://www.grants.gov/web/grants/view-opportunity.html", category: "environmental")
