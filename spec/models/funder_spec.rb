require 'rails_helper'

RSpec.describe Funder, type: :model do
  describe "valid user" do
    funder_new = Funder.new(title: "Foundation", description: "Grants funding to programs", url: "www.funding.com", category: "housing")
    no_title = Funder.new(description: "Grants funding to programs", url: "www.funding.com", category: "housing")
    no_description = Funder.new(title: "Foundation", url: "www.funding.com", category: "housing")
    no_url = Funder.new(title: "Foundation", description: "Grants funding to programs", category: "housing")
    no_category = Funder.new(title: "Foundation", description: "Grants funding to programs", url: "www.funding.com")

    it "Is valid with attributes" do
      expect(funder_new).to be_valid
    end

    it "Is not valid without a title" do
      expect(no_title).to_not be_valid
    end

    it "Is not valid without a description" do
      expect(no_description).to_not be_valid
    end

    it "Is not valid without a category" do
      expect(no_category).to_not be_valid
    end

    it "Is not valid without a description" do
      expect(no_description).to_not be_valid
    end
  end
end
