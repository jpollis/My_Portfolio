require 'sinatra'

get '/' do
  File.read("public/profile.html")
end
