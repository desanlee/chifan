require 'spec_helper'

describe "gamblegames/new" do
  before(:each) do
    assign(:gamblegame, stub_model(Gamblegame,
      :user_id => 1,
      :description => "MyString",
      :options => "MyString",
      :result => 1
    ).as_new_record)
  end

  it "renders new gamblegame form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => gamblegames_path, :method => "post" do
      assert_select "input#gamblegame_user_id", :name => "gamblegame[user_id]"
      assert_select "input#gamblegame_description", :name => "gamblegame[description]"
      assert_select "input#gamblegame_options", :name => "gamblegame[options]"
      assert_select "input#gamblegame_result", :name => "gamblegame[result]"
    end
  end
end
