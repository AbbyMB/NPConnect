require 'rails_helper'

RSpec.describe Program, type: :model do
  describe "valid program" do
    let!(:user) { User.create(email: "bob@bob.com", password: "888888", username: "bobG100", first_name: "Bob", last_name: "Green") }

    it "Is valid with attributes" do
      program_new = Program.new(name: "Project Help", description: "Provides help and support", category: "Child Welfare", owner_id: user.id , address: "330 Homer Street Newton, MA 02459")
      expect(program_new).to be_valid
    end

    it "Is not valid without an name" do
      no_name = Program.new(description: "Provides help and support", category: "Child Welfare", owner_id: user.id, address: "330 Homer Street Newton, MA 02459")
      expect(no_name).to_not be_valid
    end

    it "Is not valid without a description" do
      no_description = Program.new(name: "Project Help", category: "Child Welfare", owner_id: user.id, address: "330 Homer Street Newton, MA 02459")
      expect(no_description).to_not be_valid
    end

    it "Is not valid without a category" do
      no_category = Program.new(name: "Project Help", description: "Provides help and support", owner_id: user.id, address: "330 Homer Street Newton, MA 02459")
      expect(no_category).to_not be_valid
    end

    it "Is not valid without an address" do
      no_address = Program.new(name: "Project Help", description: "Provides help and support", category: "Child Welfare", owner_id: user.id)
      expect(no_address).to_not be_valid
    end
  end
end
