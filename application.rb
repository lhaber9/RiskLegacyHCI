require "rubygems"
require "bundler/setup"
require "sinatra"
require File.join(File.dirname(__FILE__), "environment")

configure do
  set :views, "#{File.dirname(__FILE__)}/views"
  set :show_exceptions, :after_handler
end

configure :production, :development do
  enable :logging
end

helpers do
  # add your helpers here
end

# root page
get "/" do
  erb :root
end

get "/e/:pageName" do 
	pageName = params[:pageName].to_s
	erb ("experiments/" + pageName).to_sym, :layout => false
end

get "/p/:pageName" do 
	pageName = params[:pageName].to_s
	erb ("prototype/" + pageName).to_sym, :layout => false
end

get "/a/:assnName" do 
  assnName = params[:assnName].to_s
  erb ("assignments/" + assnName).to_sym
end
