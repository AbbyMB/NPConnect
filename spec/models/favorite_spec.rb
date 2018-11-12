require 'rails_helper'

RSpec.describe Favorite, type: :model do
  describe "valid favorite" do
    let!(:user) { User.create(email: "bob@bob.com", password: "888888", username: "bobG100", first_name: "Bob", last_name: "Green") }
    let!(:funder) { Funder.create(title: "Foundation", description: "Grants funding to programs", url: "www.funding.com", category: "housing") }

    it "Is valid with attributes" do
      favorite_new = Favorite.new(user_id: user.id, funder_id: funder.id)
      expect(favorite_new).to be_valid
    end

    it "Is not valid without a user id" do
      no_user = Favorite.new(funder_id: funder.id)
      expect(no_user).to_not be_valid
    end

    it "Is not valid without a funder id" do
      no_funder = Favorite.new(user_id: user.id)
      expect(no_funder).to_not be_valid
    end
  end
end
